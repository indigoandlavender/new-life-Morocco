import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors when env vars aren't set
let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

const FROM_EMAIL = process.env.FROM_EMAIL || 'Morocco Advisors <hello@moroccoadvisors.com>';

interface WelcomeEmailProps {
  to: string;
  firstName?: string;
}

export async function sendWelcomeEmail({ to, firstName }: WelcomeEmailProps) {
  const name = firstName || 'there';

  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [to],
      subject: 'Welcome to Morocco Advisors - Your Free Guide Inside',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #faf9f6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <tr>
              <td style="text-align: center; padding-bottom: 32px;">
                <h1 style="color: #25364d; font-size: 24px; margin: 0;">Morocco Advisors</h1>
              </td>
            </tr>
            <tr>
              <td style="background-color: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h2 style="color: #25364d; font-size: 22px; margin: 0 0 16px 0;">Hey ${name}!</h2>

                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                  Welcome to the Morocco Advisors community. You've taken the first step toward discovering
                  what life in Morocco could look like for you.
                </p>

                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                  As promised, here's your free guide to help you get started:
                </p>

                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="text-align: center; padding: 24px 0;">
                      <a href="https://moroccoadvisors.com/guide"
                         style="display: inline-block; background-color: #c75f3a; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                        Download Your Free Guide
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 24px 0 16px 0;">
                  <strong>What's inside:</strong>
                </p>
                <ul style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 24px 0; padding-left: 20px;">
                  <li>The real cost of living in Morocco (with actual numbers)</li>
                  <li>Visa requirements for Americans - what you need to know</li>
                  <li>The Carte de Sejour process explained simply</li>
                  <li>Best cities for American expats</li>
                  <li>Common mistakes to avoid when relocating</li>
                </ul>

                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                  We'll also send you occasional updates about life in Morocco, insider tips, and
                  helpful resources. No spam, just useful information.
                </p>

                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 24px 0 0 0;">
                  Have questions? Just reply to this email - we read and respond to every one.
                </p>

                <p style="color: #25364d; font-size: 16px; line-height: 1.6; margin: 24px 0 0 0;">
                  <strong>Welcome aboard,</strong><br>
                  The Morocco Advisors Team
                </p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 32px 20px; color: #718096; font-size: 12px;">
                <p style="margin: 0 0 8px 0;">
                  Morocco Advisors | Helping Americans relocate to Morocco
                </p>
                <p style="margin: 0;">
                  <a href="https://moroccoadvisors.com" style="color: #c75f3a; text-decoration: none;">moroccoadvisors.com</a>
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Hey ${name}!

Welcome to the Morocco Advisors community. You've taken the first step toward discovering what life in Morocco could look like for you.

As promised, here's your free guide: https://moroccoadvisors.com/guide

What's inside:
- The real cost of living in Morocco (with actual numbers)
- Visa requirements for Americans - what you need to know
- The Carte de Sejour process explained simply
- Best cities for American expats
- Common mistakes to avoid when relocating

We'll also send you occasional updates about life in Morocco, insider tips, and helpful resources. No spam, just useful information.

Have questions? Just reply to this email - we read and respond to every one.

Welcome aboard,
The Morocco Advisors Team

---
Morocco Advisors | Helping Americans relocate to Morocco
https://moroccoadvisors.com
      `,
    });

    if (error) {
      console.error('[Email] Error sending welcome email:', error);
      return { success: false, error };
    }

    console.log('[Email] Welcome email sent:', data?.id);
    return { success: true, id: data?.id };
  } catch (error) {
    console.error('[Email] Exception sending welcome email:', error);
    return { success: false, error };
  }
}
