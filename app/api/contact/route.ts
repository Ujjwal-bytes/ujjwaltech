import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define types for request body
interface ContactRequestBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    // Parse request body
    const body: ContactRequestBody = await request.json();
    const { name, email, phone, message } = body;

    // Validate input
    const errors: string[] = [];
    if (!name || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please provide a valid email address');
    }
    if (!message || message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: errors.map((err, idx) => ({ [`field${idx}`]: err })),
        },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #ff4500; border-bottom: 2px solid #ff4500; padding-bottom: 10px;">New Portfolio Inquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ff4500;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 6px;">
            <strong style="font-size: 16px;">Message:</strong>
            <p style="margin-top: 8px; line-height: 1.5;">${message}</p>
          </div>
          <footer style="margin-top: 30px; color: #666; font-size: 12px; text-align: center;">
            <p>This email was sent from your portfolio website contact form.</p>
          </footer>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! Your message has been sent successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong while sending your message. Please try again later.',
      },
      { status: 500 }
    );
  }
}
