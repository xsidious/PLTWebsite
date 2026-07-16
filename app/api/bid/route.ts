import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const bidSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  projectType: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = bidSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.BID_TO_EMAIL || "Pdtunlimited@gmail.com";
    const fromEmail =
      process.env.BID_FROM_EMAIL || "PDT Unlimited <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please contact us directly or try again later.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New Bid Request — ${data.company} (${data.projectType})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1B33; border-bottom: 2px solid #E1121A; padding-bottom: 12px;">
            New Bid Request — PDT Unlimited
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr><td style="padding: 8px 0; color: #6B7280; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Company</td><td style="padding: 8px 0; font-weight: 600;">${data.company}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Phone</td><td style="padding: 8px 0;">${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Project Type</td><td style="padding: 8px 0; font-weight: 600;">${data.projectType}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #F7F8FA; border-radius: 8px;">
            <p style="color: #6B7280; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Project Details</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data. Please check your inputs." },
        { status: 400 },
      );
    }

    console.error("Bid API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
