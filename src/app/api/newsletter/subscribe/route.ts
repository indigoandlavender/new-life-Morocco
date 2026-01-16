import { NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/lib/sheets";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Subscribe to newsletter
    const result = await subscribeToNewsletter(email.toLowerCase().trim());

    // Send welcome email if new subscription
    if (result.success && !result.isResubscribe && result.message.includes("You're in")) {
      // Fire and forget - don't wait for email to send
      sendWelcomeEmail({ to: email }).catch((err) => {
        console.error("[Newsletter] Failed to send welcome email:", err);
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("[Newsletter API] Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
