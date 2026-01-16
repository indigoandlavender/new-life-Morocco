import { NextResponse } from "next/server";
import { unsubscribeFromNewsletter } from "@/lib/sheets";

// GET - for email link clicks
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/unsubscribe?error=missing-token", request.url));
  }

  const result = await unsubscribeFromNewsletter(token);

  if (result.success) {
    return NextResponse.redirect(new URL("/unsubscribe?success=true", request.url));
  } else {
    return NextResponse.redirect(new URL(`/unsubscribe?error=${encodeURIComponent(result.message)}`, request.url));
  }
}

// POST - for form submissions
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid unsubscribe token" },
        { status: 400 }
      );
    }

    const result = await unsubscribeFromNewsletter(token);
    return NextResponse.json(result);
  } catch (error) {
    console.error("[Unsubscribe API] Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
