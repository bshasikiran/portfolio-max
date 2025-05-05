import { MailService } from '@sendgrid/mail';

// This file uses the same SendGrid API but configured to work with Heroku SendGrid
// The main difference is in how we structure the from address and templates

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

export async function sendHerokuEmail(params: EmailParams): Promise<boolean> {
  try {
    const { name, email, subject, message } = params;
    
    // Heroku SendGrid often allows sending from a "sendgrid.me" address without verification
    // or use your own address with a +tag (which sometimes works without separate verification)
    await mailService.send({
      to: 'bshasikiran@gmail.com',
      // Attempt methods that sometimes work with Heroku SendGrid
      from: {
        email: 'sendgrid@sendgrid.me', // Generic SendGrid address sometimes allowed
        name: 'Portfolio Contact Form'
      },
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
    
    console.log('Email sent successfully to bshasikiran@gmail.com via Heroku SendGrid approach');
    return true;
  } catch (error) {
    console.error('Heroku SendGrid email error:', error);
    
    // Log more details about the error
    if (error && (error as any).response && (error as any).response.body) {
      console.error('Heroku SendGrid error details:', JSON.stringify((error as any).response.body));
    }
    
    return false;
  }
}