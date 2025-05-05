import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await apiRequest<{success: boolean; message: string}>({
        method: 'POST',
        url: '/api/contact',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast({
          title: "Message sent!",
          description: "Thank you for contacting me. I'll get back to you soon.",
          variant: "default",
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormSuccess(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Message failed to send",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl font-bold font-poppins mb-4">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-16 h-1 bg-primary-500 mx-auto"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Feel free to reach out if you have any questions or would like to work together. I'm
            always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 className="text-xl font-bold font-poppins mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-primary-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Email</h4>
                  <a
                    href="mailto:bshasikiran@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    bshasikiran@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-primary-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-primary-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Social Profiles</h4>
                  <div className="flex space-x-3 mt-2">
                    <a
                      href="https://github.com/bshasikiran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/betala-shasi-kiran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://lol-eight-alpha.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 5h2v2h-2v-2zm0 4h2v10h-2v-10z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    formErrors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                  } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {formErrors.name && (
                  <div className="text-red-500 text-sm mt-1">{formErrors.name}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    formErrors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                  } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {formErrors.email && (
                  <div className="text-red-500 text-sm mt-1">{formErrors.email}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    formErrors.subject
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                  } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {formErrors.subject && (
                  <div className="text-red-500 text-sm mt-1">{formErrors.subject}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    formErrors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                  } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {formErrors.message && (
                  <div className="text-red-500 text-sm mt-1">{formErrors.message}</div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </Button>

              {formSuccess && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-center">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
