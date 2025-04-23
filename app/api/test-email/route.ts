import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error('RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(apiKey);

export async function GET() {
  try {
    console.log('API Key:', apiKey ? 'Set' : 'Not Set');
    
    const { data, error } = await resend.emails.send({
      from: 'Test Email <onboarding@resend.dev>',
      to: ['kashishpratap4@gmail.com'],
      subject: 'Test Email from Portfolio',
      html: '<p>This is a test email to verify that the Resend API is working correctly.</p>',
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: `Failed to send test email: ${error.message}` },
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