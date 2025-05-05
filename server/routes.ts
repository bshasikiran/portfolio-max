import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { sendContactEmail } from "./email";

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
      
      // Send email
      const emailSent = await sendContactEmail(formData);
      
      if (emailSent) {
        res.status(200).json({ 
          success: true, 
          message: "Thank you for your message! We'll get back to you soon." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "There was a problem sending your message. Please try again later." 
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

  const httpServer = createServer(app);

  return httpServer;
}
