import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// In-memory rate limiting map (IP -> array of timestamps)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(request) {
  try {
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many messages sent. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, botcheck } = body;

    // Spam honeypot detection
    if (botcheck) {
      return NextResponse.json(
        { success: false, message: "Spam submission detected." },
        { status: 400 }
      );
    }

    // Server-side field validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, message: "A valid name (2-100 characters) is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim()) || email.trim().length > 120) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3 || subject.trim().length > 150) {
      return NextResponse.json(
        { success: false, message: "Subject must be between 3 and 150 characters." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 15 || message.trim().length > 3000) {
      return NextResponse.json(
        { success: false, message: "Message must contain between 15 and 3000 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.CONTACT_EMAIL_API_KEY;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "dhanush.cse.dev@gmail.com";

    // Scenario A: Email API Key configured (Resend provider integration)
    if (apiKey) {
      const emailPayload = {
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email.trim(),
        subject: `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nIP: ${clientIp}\nDate: ${new Date().toISOString()}\n\nMessage:\n${message.trim()}`,
      };

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(emailPayload),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error("Email service provider delivery error:", errorData);
        return NextResponse.json(
          {
            success: false,
            message: "Delivery provider rejected the message. Please contact directly via email.",
            fallbackEmail: recipient,
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your message has been delivered to Dhanush's inbox.",
        },
        { status: 200 }
      );
    }

    // Scenario B: No external API key configured. Store durably in local database/storage file.
    try {
      const storageDir = path.join(process.cwd(), "src", "data");
      const storageFile = path.join(storageDir, "inquiries.json");

      if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, { recursive: true });
      }

      let inquiries = [];
      if (fs.existsSync(storageFile)) {
        try {
          const raw = fs.readFileSync(storageFile, "utf8");
          inquiries = JSON.parse(raw);
          if (!Array.isArray(inquiries)) inquiries = [];
        } catch {
          inquiries = [];
        }
      }

      const newInquiry = {
        id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        timestamp: new Date().toISOString(),
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        clientIp,
      };

      inquiries.push(newInquiry);
      fs.writeFileSync(storageFile, JSON.stringify(inquiries, null, 2), "utf8");

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you! Your message has been recorded into the portfolio inquiry registry. Dhanush will review it shortly.",
        },
        { status: 200 }
      );
    } catch (storageError) {
      console.error("Durable storage write failed:", storageError);
      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to record message at this time. Please reach out directly to contact@dhanush.dev.",
          fallbackEmail: recipient,
        },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error("Contact route unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please reach out directly via email.",
      },
      { status: 500 }
    );
  }
}
