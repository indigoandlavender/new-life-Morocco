import { google } from "googleapis";

const getGoogleSheetsClient = () => {
  const base64Creds = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
  if (!base64Creds) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_BASE64 is not set");
  }

  const credentials = JSON.parse(
    Buffer.from(base64Creds, "base64").toString("utf-8")
  );

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

const NEXUS_SHEET_ID = process.env.NEXUS_SHEET_ID;
const SITE_ID = process.env.SITE_ID || "new-life-morocco";

// Brand name mapping
const BRAND_NAMES: Record<string, string> = {
  'new-life-morocco': 'Morocco Advisors',
  'slow-morocco': 'Slow Morocco',
};

// Fetch data from Nexus database (shared across brands)
export async function getNexusData(tabName: string) {
  const sheets = getGoogleSheetsClient();

  if (!NEXUS_SHEET_ID) {
    console.error("NEXUS_SHEET_ID is not set");
    return [];
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: NEXUS_SHEET_ID,
      range: `${tabName}!A1:ZZ`,
    });

    const rows = response.data.values || [];
    if (rows.length === 0) return [];

    const headers = rows[0];
    return rows.slice(1).map((row) => {
      const obj: Record<string, string> = {};
      headers.forEach((header: string, index: number) => {
        obj[header] = row[index] || "";
      });
      return obj;
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Error fetching Nexus sheet "${tabName}":`, errorMessage);
    return [];
  }
}

// Generate random unsubscribe token
function generateUnsubscribeToken(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 32; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

// Subscribe to newsletter
export async function subscribeToNewsletter(
  email: string,
  brand?: string
): Promise<{ success: boolean; message: string; isResubscribe?: boolean }> {
  if (!NEXUS_SHEET_ID) {
    console.error("[Newsletter] NEXUS_SHEET_ID not configured");
    return { success: false, message: "Configuration error" };
  }

  const brandName = brand || BRAND_NAMES[SITE_ID] || SITE_ID;

  console.log("[Newsletter] Subscribing:", { email, brandName, SITE_ID, NEXUS_SHEET_ID });

  try {
    const sheets = getGoogleSheetsClient();

    // Check if already subscribed
    const existingRows = await sheets.spreadsheets.values.get({
      spreadsheetId: NEXUS_SHEET_ID,
      range: "Newsletter_Subscribers!A1:F",
    });

    const rows = existingRows.data.values || [];
    const headers = rows[0] || [];
    const emailIndex = headers.indexOf("email");
    const brandIndex = headers.indexOf("brand");
    const statusIndex = headers.indexOf("status");

    // Find existing subscription for this email + brand
    let existingRowIndex = -1;
    let existingStatus = "";

    for (let i = 1; i < rows.length; i++) {
      if (rows[i][emailIndex]?.toLowerCase() === email.toLowerCase() &&
          rows[i][brandIndex] === brandName) {
        existingRowIndex = i;
        existingStatus = rows[i][statusIndex];
        break;
      }
    }

    const now = new Date().toISOString();
    const token = generateUnsubscribeToken();

    if (existingRowIndex > 0) {
      if (existingStatus === "active") {
        console.log("[Newsletter] Already subscribed:", email);
        return { success: true, message: "You're already subscribed!" };
      }

      // Reactivate subscription
      console.log("[Newsletter] Reactivating subscription:", email);
      await sheets.spreadsheets.values.update({
        spreadsheetId: NEXUS_SHEET_ID,
        range: `Newsletter_Subscribers!D${existingRowIndex + 1}`,
        valueInputOption: "RAW",
        requestBody: {
          values: [["active"]],
        },
      });

      return { success: true, message: "Welcome back!", isResubscribe: true };
    }

    // New subscription
    console.log("[Newsletter] Adding new subscription:", email);
    await sheets.spreadsheets.values.append({
      spreadsheetId: NEXUS_SHEET_ID,
      range: "Newsletter_Subscribers!A:F",
      valueInputOption: "RAW",
      requestBody: {
        values: [[email, brandName, now, "active", token, ""]],
      },
    });

    console.log("[Newsletter] Successfully subscribed:", email);
    return { success: true, message: "You're in! Check your inbox for your free guide." };
  } catch (error) {
    console.error("[Newsletter] Error subscribing:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

// Unsubscribe from newsletter
export async function unsubscribeFromNewsletter(
  token: string
): Promise<{ success: boolean; message: string }> {
  if (!NEXUS_SHEET_ID) {
    return { success: false, message: "Configuration error" };
  }

  try {
    const sheets = getGoogleSheetsClient();

    const existingRows = await sheets.spreadsheets.values.get({
      spreadsheetId: NEXUS_SHEET_ID,
      range: "Newsletter_Subscribers!A1:F",
    });

    const rows = existingRows.data.values || [];
    const headers = rows[0] || [];
    const tokenIndex = headers.indexOf("unsubscribe_token");
    const statusIndex = headers.indexOf("status");

    // Find subscription by token
    let rowIndex = -1;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][tokenIndex] === token) {
        rowIndex = i;
        break;
      }
    }

    if (rowIndex < 0) {
      return { success: false, message: "Invalid or expired link." };
    }

    if (rows[rowIndex][statusIndex] === "unsubscribed") {
      return { success: true, message: "You've already been unsubscribed." };
    }

    // Update status and add unsubscribed_at timestamp
    const now = new Date().toISOString();
    await sheets.spreadsheets.values.update({
      spreadsheetId: NEXUS_SHEET_ID,
      range: `Newsletter_Subscribers!D${rowIndex + 1}:F${rowIndex + 1}`,
      valueInputOption: "RAW",
      requestBody: {
        values: [["unsubscribed", rows[rowIndex][tokenIndex], now]],
      },
    });

    return { success: true, message: "You've been unsubscribed successfully." };
  } catch (error) {
    console.error("[Newsletter] Error unsubscribing:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
