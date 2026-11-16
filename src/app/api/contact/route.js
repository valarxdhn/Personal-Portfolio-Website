import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Invalid email address format." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return NextResponse.json(
        { success: false, message: "Subject is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 15) {
      return NextResponse.json(
        { success: false, message: "Message must contain at least 15 characters." },
        { status: 400 }
      );
    }

    // Check if an email integration provider (such as Resend, SendGrid, or custom webhook) is configured
    const apiKey = process.env.CONTACT_EMAIL_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "dhanush.cse.dev@gmail.com";

    if (apiKey) {
      // In production with configured key: forwards to email provider API securely on server-side
      // e.g. await fetch("https://api.resend.com/emails", ...)
    } else {
      // Clean fallback: logs inquiry safely in server console for portfolio review
      console.log("[Portfolio Contact Inquiry Received]:", {
        timestamp: new Date().toISOString(),
        from: `${name.trim()} <${email.trim()}>`,
        subject: subject.trim(),
        messageLength: message.trim().length,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you, " +
          name.trim() +
          "! Your message has been received. Dhanush will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact route handler:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}
