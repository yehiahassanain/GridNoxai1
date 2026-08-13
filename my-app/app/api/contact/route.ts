import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, message } = await req.json();

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured in .env.local" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "GridNox.ai Contact <onboarding@resend.dev>",
      to: ["Moealy1@outlook.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0d0e12; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #ff4949; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #9294a0; font-size: 14px; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0; font-weight: 600;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9294a0; font-size: 14px;">Email Address:</td>
              <td style="padding: 8px 0; font-weight: 600;"><a href="mailto:${email}" style="color: #ff4949;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9294a0; font-size: 14px;">Phone Number:</td>
              <td style="padding: 8px 0; font-weight: 600;">${phone || "Not provided"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;" />
          <p style="color: #9294a0; font-size: 14px; margin-bottom: 8px; font-weight: 600;">Message:</p>
          <p style="white-space: pre-wrap; line-height: 1.6; background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please check your Resend API key." },
      { status: 500 }
    );
  }
}
