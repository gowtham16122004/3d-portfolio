import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email recipient
const CONTACT_EMAIL = "contactgowthamph@gmail.com";

// Rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now >= entry.resetAt) {
    rateLimit.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// Contact form validation
const EmailSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is invalid!"),
  email: z.string().trim().email("Email is invalid!"),
  message: z.string().trim().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    // Rate limit requests
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        {
          error: "Too many requests. Please try again later.",
        },
        { status: 429 },
      );
    }

    // Parse request body
    const body = await req.json();

    const validation = EmailSchema.safeParse(body);

    if (!validation.success) {
      return Response.json(
        {
          error: validation.error.issues[0]?.message ?? "Invalid form data.",
        },
        { status: 400 },
      );
    }

    const { fullName, email, message } = validation.data;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New Portfolio Message from ${fullName}`,
      react: EmailTemplate({
        fullName,
        email,
        message,
      }) as React.ReactElement,
    });

    // Handle Resend errors
    if (error) {
      console.error("Resend API Error:", error);

      return Response.json(
        {
          error: "Unable to send your message. Please try again later.",
        },
        { status: error.statusCode === 429 ? 429 : 502 },
      );
    }

    // Success
    return Response.json(
      {
        success: true,
        message: "Message sent successfully!",
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      {
        error: "Internal server error. Please try again later.",
      },
      { status: 500 },
    );
  }
}
