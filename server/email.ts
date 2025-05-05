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
    
    // Using the email address that's receiving messages as the from address
    // This is safer for deliverability and avoids needing to verify a sender domain
    await mailService.send({
      to: 'bshasikiran@gmail.com',
      from: 'bshasikiran@gmail.com', // Using the same email as recipient (must be verified in SendGrid)
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
    return false;
  }
}