import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Get API key from environment variables
const apiKey = process.env.RESEND_API_KEY || 'test_api_key';

// Create Resend instance
const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    console.log('Received form data:', { name, email, subject, message });

    // Check if we're using the real API key
    if (apiKey === 'test_api_key') {
      console.log('Using test API key - email would not be sent');
      // Return success response for development purposes
      return NextResponse.json({ 
        success: true, 
        message: 'Email simulation successful (development mode)',
        data: { id: 'test_email_id' } 
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['kashishpratap4@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully via Resend:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Check server logs for details.' },
      { status: 500 }
    );
  }
} 