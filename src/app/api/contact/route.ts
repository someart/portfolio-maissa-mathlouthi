import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ message: "Email service not configured" }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["maiissa.mathlouthi@gmail.com"],
      subject: `Contact Form: Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json({ message: "Failed to send email", error }, { status: 400 })
    }

    return NextResponse.json({ message: "Email sent successfully!", data }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
  }
}
