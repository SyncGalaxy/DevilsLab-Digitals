import { NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import FormData from "form-data";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot field
};

function clean(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email);
    const company = clean(body.company);
    const phone = clean(body.phone);
    const service = clean(body.service);
    const budget = clean(body.budget);
    const message = clean(body.message);
    const website = clean(body.website);

    // Honeypot: bots often fill hidden fields
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill name, email, and message." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const fromEmail = process.env.MAILGUN_FROM_EMAIL;
    const toEmail = process.env.MAILGUN_TO_EMAIL || "work@devilslab.co.in";

    if (!apiKey || !domain || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({
      username: "api",
      key: apiKey,
    });

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const subject = `New DevilsLab Lead: ${name}`;

    const text = `
New lead from DevilsLab Digitals website

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Phone: ${phone || "Not provided"}
Service: ${service || "Not selected"}
Budget: ${budget || "Not selected"}

Message:
${message}

Submitted: ${submittedAt}
`;

    const html = `
      <div style="font-family: Arial, sans-serif; background:#f6f6f6; padding:24px;">
        <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e5e5e5; border-radius:14px; overflow:hidden;">
          <div style="background:#050505; color:#ffffff; padding:22px 24px;">
            <h1 style="margin:0; font-size:22px;">New DevilsLab Lead</h1>
            <p style="margin:8px 0 0; color:#cfcfcf;">Submitted from the website contact form</p>
          </div>

          <div style="padding:24px;">
            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0; color:#666;">Name</td>
                <td style="padding:10px 0; font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; color:#666;">Email</td>
                <td style="padding:10px 0; font-weight:600;">
                  <a href="mailto:${email}" style="color:#111;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0; color:#666;">Company</td>
                <td style="padding:10px 0; font-weight:600;">${company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; color:#666;">Phone</td>
                <td style="padding:10px 0; font-weight:600;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; color:#666;">Service</td>
                <td style="padding:10px 0; font-weight:600;">${service || "Not selected"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; color:#666;">Budget</td>
                <td style="padding:10px 0; font-weight:600;">${budget || "Not selected"}</td>
              </tr>
            </table>

            <div style="margin-top:22px;">
              <p style="margin:0 0 8px; color:#666;">Message</p>
              <div style="white-space:pre-wrap; background:#fafafa; border:1px solid #e8e8e8; border-radius:12px; padding:16px; line-height:1.6;">
                ${message}
              </div>
            </div>

            <p style="margin-top:22px; color:#777; font-size:13px;">
              Submitted: ${submittedAt}
            </p>
          </div>
        </div>
      </div>
    `;

    await client.messages.create(domain, {
      from: fromEmail,
      to: [toEmail],
      subject,
      text,
      html,
      "h:Reply-To": email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
