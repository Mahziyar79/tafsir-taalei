// api/sendEmail.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  if (req.method === "POST") {
    const requestData = await req.json();
    const { subject, email,description } = requestData;
    // Use nodemailer to send the email
    const transporter = nodemailer.createTransport({
      // Configure your email provider here
      service: "Gmail",
      auth: {
        user: "mgillanpour79@gmail.com",
        pass: "ysmruqhhigguusxg",
      },
    });

    try {
      const info = await transporter.sendMail({
        from: "mgillanpour79@gmail.com",
        to: "real.products.apps@gmail.com, mgillanpour79@gmail.com",
        subject: "New Contact Form Submission (tafsir-taalei)",
        html: `<p>Subject: ${subject}</p><p>Email: ${email}</p><p>Description: ${description}</p>`,
      });

      console.log("Email sent: ", info.response);
      return NextResponse.json(requestData);
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(error);
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" });
  }
}
