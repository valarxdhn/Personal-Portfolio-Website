import { NextResponse } from "next/server";

// In-memory IP rate limiter (3 requests per minute per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
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

/**
 * GET /api/contact
 * Public check to determine whether genuine backend email delivery is configured.
 */
export async function GET() {
  const isConfigured = Boolean(process.env.CONTACT_EMAIL_API_KEY);
  return NextResponse.json(
    { configured: isConfigured },
    { status: 200 }
  );
}

/**
 * POST /api/contact
 * Handles genuine email dispatch via Resend.
 * Strictly avoids simulated success or ephemeral filesystem storage.
 */
export async function POST(request) {
  try {
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. Rate Limiting Check
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many messages sent. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Content-Type Validation
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid request content type. Expected application/json." },
        { status: 415 }
      );
    }

    // 3. Safe JSON Body Parsing
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Malformed JSON payload in request." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, botcheck } = body || {};

    // 4. Honeypot Anti-Spam Check
    if (botcheck) {
      return NextResponse.json(
        { success: false, message: "Spam submission detected." },
        { status: 400 }
      );
    }

    // 5. Strict Server-Side Validation
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

    // 6. Verify Production Email Provider Configuration
    const apiKey = process.env.CONTACT_EMAIL_API_KEY;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "dhanushmk95@gmail.com";
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    // If API key is not configured, do NOT fake success or save to local filesystem.
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          configured: false,
          message: "Unable to send your message right now. Please contact me directly by email.",
        },
        { status: 503 }
      );
    }

    // 7. Dispatch Genuine Email via Resend
    const emailPayload = {
      from: fromAddress,
      to: [recipient],
      reply_to: email.trim(),
      subject: `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`,
      text: `Sender Name: ${name.trim()}\nSender Email: ${email.trim()}\nClient IP: ${clientIp}\nTimestamp: ${new Date().toISOString()}\n\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
    };

    let emailResponse;
    try {
      emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(emailPayload),
      });
    } catch {
      // Network failure reaching provider
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now. Please contact me directly by email.",
        },
        { status: 502 }
      );
    }

    // 8. Verify Provider Acceptance
    if (!emailResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now. Please contact me directly by email.",
        },
        { status: 502 }
      );
    }

    const responseData = await emailResponse.json().catch(() => null);

    if (!responseData || !responseData.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now. Please contact me directly by email.",
        },
        { status: 502 }
      );
    }

    // 9. Genuine Provider Acceptance Confirmed
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message right now. Please contact me directly by email.",
      },
      { status: 500 }
    );
  }
}
