import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, category, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !category || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0eca7b; border-bottom: 2px solid #0eca7b; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333;">Message</h3>
          <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            This message was sent from the Finseo contact form at ${new Date().toLocaleString()}.
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Finseo Contact Form <noreply@finseo.ai>',
      to: ['info@finseo.ai'],
      subject: `[${category.toUpperCase()}] ${subject}`,
      html: emailContent,
      replyTo: email,
    });

    // Send confirmation email to the user
    const confirmationContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0eca7b; border-bottom: 2px solid #0eca7b; padding-bottom: 10px;">
          Thank You for Contacting Finseo
        </h2>
        
        <p>Hi ${name},</p>
        
        <p>Thank you for reaching out to us! We've received your message and our support team will get back to you as soon as possible.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Your Message Summary</h3>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <p>Expected response time based on your inquiry type:</p>
        <ul>
          <li><strong>General Support:</strong> Within 24 hours</li>
          <li><strong>Technical Issues:</strong> Within 12 hours</li>
          <li><strong>Sales Inquiries:</strong> Within 4 hours</li>
          <li><strong>Other:</strong> Within 24 hours</li>
        </ul>
        
        <p>If you have any urgent questions, you can also reach us directly at <a href="mailto:info@finseo.ai">info@finseo.ai</a>.</p>
        
        <p>Best regards,<br>The Finseo Support Team</p>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'Finseo Support <noreply@finseo.ai>',
      to: [email],
      subject: 'Thank you for contacting Finseo - We\'ve received your message',
      html: confirmationContent,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 