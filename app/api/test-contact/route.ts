import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error('RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(apiKey);

export async function GET() {
  try {
    // Simulate a contact form submission
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Contact Form',
      message: 'This is a test message to verify that the contact form is working correctly and sending the actual message content.'
    };

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['kashishpratap4@gmail.com'],
      replyTo: testData.email,
      subject: `New Contact Form Submission: ${testData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${testData.name}</p>
        <p><strong>Email:</strong> ${testData.email}</p>
        <p><strong>Subject:</strong> ${testData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${testData.message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      { error: 'Failed to send test email' },
      { status: 500 }
    );
  }
} 