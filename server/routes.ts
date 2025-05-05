import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { sendContactEmail } from "./email";
import { saveContactMessage } from "./contact-storage";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const formData = contactFormSchema.parse(req.body);
      
      // First try to send email with SendGrid (but this may fail due to sender verification)
      let emailSent = false;
      try {
        emailSent = await sendContactEmail(formData);
      } catch (emailError) {
        console.log('SendGrid email failed, falling back to local storage');
      }
      
      // If email sending fails, save the message locally
      if (!emailSent) {
        const saved = await saveContactMessage(formData);
        
        if (saved) {
          // Success - message was saved locally
          res.status(200).json({ 
            success: true, 
            message: "Thank you for your message! I'll check it soon.", 
            note: "Your message was stored locally instead of being emailed."
          });
        } else {
          // Both email and local storage failed
          res.status(500).json({ 
            success: false, 
            message: "There was a problem storing your message. Please try again later." 
          });
        }
      } else {
        // Email was sent successfully
        res.status(200).json({ 
          success: true, 
          message: "Thank you for your message! I'll get back to you soon." 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        const errorMessages = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }));
        
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: errorMessages 
        });
      } else {
        // Return general server error
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again later." 
        });
      }
    }
  });

  // Add a route to view saved messages (protect this in production!)
  app.get("/api/contact-messages", async (_req: Request, res: Response) => {
    try {
      const messages = await import('./contact-storage').then(m => m.getContactMessages());
      res.status(200).json({ success: true, messages });
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error retrieving contact messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
