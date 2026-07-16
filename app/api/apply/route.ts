import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const applySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  position: z.string().min(1),
  experience: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = applySchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail =
      process.env.CAREERS_TO_EMAIL ||
      process.env.BID_TO_EMAIL ||
      "Pdtunlimited@gmail.com";
    const fromEmail =
      process.env.BID_FROM_EMAIL || "PDT Unlimited <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Application service is not configured. Please contact us directly or try again later.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New Job Application — ${data.position} (${data.name})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1B33; border-bottom: 2px solid #E1121A; padding-bottom: 12px;">
            New Job Application — PDT Unlimited
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr><td style="padding: 8px 0; color: #6B7280; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Position</td><td style="padding: 8px 0; font-weight: 600;">${data.position}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Phone</td><td style="padding: 8px 0;">${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Experience</td><td style="padding: 8px 0;">${data.experience || "—"}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #F7F8FA; border-radius: 8px;">
            <p style="color: #6B7280; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">About the Applicant</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send application. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid application data. Please check your inputs." },
        { status: 400 },
      );
    }

    console.error("Apply API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
