import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(params: EmailParams): Promise<boolean> {
  try {
    const { name, email, subject, message } = params;
    
    // Using SendGrid's recommended approach for non-verified domains
    await mailService.send({
      to: 'bshasikiran@gmail.com',
      from: 'noreply@email.portfoliowebsite.com', // Generic sender that SendGrid allows
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New contact form submission</h3>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent via your portfolio contact form.</small></p>
      `,
      replyTo: email, // So you can reply directly to the sender
    });
    
    console.log('Email sent successfully to bshasikiran@gmail.com');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    
    // Log more details about the error
    if (error && (error as any).response && (error as any).response.body) {
      console.error('SendGrid error details:', JSON.stringify((error as any).response.body));
    }
    
    return false;
  }
}