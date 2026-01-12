import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";

const offices = [
  {
    name: "Head Office - Dubai",
    address: "District 12, Jumeirah Village Circle, Dubai, United Arab Emirates",
    phone: "+971 56 994 9346",
    phoneHref: "+971569949346",
  },
  {
    name: "UK Office",
    address: "19 Farrow Avenue, Hampton Vale, PE7 8HT, England, UK",
    phone: "+44 7519 302088",
    phoneHref: "+447519302088",
  },
  {
    name: "Pakistan Office",
    address: "Abbasi Business Center, Rawalpindi",
    phone: "+92 313 770 7190",
    phoneHref: "+923137707190",
  },
];

const services = [
  "Web Application Development",
  "Mobile App Development",
  "AI Solutions",
  "Custom Software Development",
  "Cloud & DevOps",
  "Other",
];

const budgetRanges = [
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

// Validation schema with XSS protection
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .regex(/^[a-zA-Z0-9\s.,&'-]*$/, "Company name contains invalid characters")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z
    .string()
    .min(20, "Please provide at least 20 characters about your project")
    .max(2000, "Message must be less than 2000 characters")
    .refine(
      (val) => !/<script|javascript:|on\w+=/i.test(val),
      "Invalid characters detected in message"
    ),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      const fieldSchema = contactFormSchema.shape[name];
      fieldSchema.parse(value);
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [name]: error.errors[0]?.message }));
      }
    }
  };

  const handleInputChange = (name: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate all fields
      const validatedData = contactFormSchema.parse(formData);

      // Sanitize all inputs
      const sanitizedData = {
        firstName: sanitizeInput(validatedData.firstName),
        lastName: sanitizeInput(validatedData.lastName),
        email: sanitizeInput(validatedData.email),
        company: sanitizeInput(validatedData.company || ""),
        service: sanitizeInput(validatedData.service),
        budget: sanitizeInput(validatedData.budget || ""),
        message: sanitizeInput(validatedData.message),
      };

      // Create mailto link with form data
      const subject = encodeURIComponent(
        `New Project Inquiry - ${sanitizedData.service}`
      );
      const body = encodeURIComponent(
        `Name: ${sanitizedData.firstName} ${sanitizedData.lastName}\n` +
          `Email: ${sanitizedData.email}\n` +
          `Company: ${sanitizedData.company || "Not provided"}\n` +
          `Service: ${sanitizedData.service}\n` +
          `Budget: ${sanitizedData.budget || "Not specified"}\n\n` +
          `Project Details:\n${sanitizedData.message}`
      );

      // Open mail client
      window.location.href = `mailto:mmatiullah552@gmail.com?subject=${subject}&body=${body}`;

      // Show success after a brief delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof ContactFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-accent mb-3 md:mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-heading font-bold text-surface-dark-foreground leading-tight">
              Let's Build Something{" "}
              <span className="gradient-brand-text">Powerful</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-surface-dark-foreground/70 leading-relaxed">
              Tell us about your project and we'll get back to you within 24
              hours with a detailed proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-xl md:text-title font-heading font-bold mb-4 md:mb-6">Get in Touch</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Ready to discuss your project? Reach out directly or fill out the
              form and we'll respond promptly.
            </p>

            {/* Offices */}
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.name} className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-medium mb-1">
                      {office.name}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">
                      {office.address}
                    </p>
                    <a
                      href={`tel:${office.phoneHref}`}
                      className="text-xs md:text-sm text-accent hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 p-4 md:p-6 rounded-2xl bg-secondary border border-border">
              <h3 className="font-heading font-semibold text-sm md:text-base mb-2">
                Prefer a Call?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4">
                Schedule a 30-minute discovery call with our team.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+971569949346" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="p-6 md:p-8 lg:p-10 rounded-2xl border border-border bg-card">
              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4 md:mb-6">
                    <CheckCircle2 className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-title font-heading font-bold mb-3 md:mb-4">Thank You!</h3>
                  <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                    Your email client should have opened with the message. If not, 
                    please email us directly at{" "}
                    <a href="mailto:mmatiullah552@gmail.com" className="text-accent hover:underline">
                      mmatiullah552@gmail.com
                    </a>
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 md:mt-8"
                    onClick={resetForm}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`h-11 md:h-12 text-sm md:text-base ${errors.firstName ? "border-red-500" : ""}`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={`h-11 md:h-12 text-sm md:text-base ${errors.lastName ? "border-red-500" : ""}`}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`h-11 md:h-12 text-sm md:text-base ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className={`h-11 md:h-12 text-sm md:text-base ${errors.company ? "border-red-500" : ""}`}
                      />
                      {errors.company && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm">Service Interested In *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleInputChange("service", value)}
                      >
                        <SelectTrigger className={`h-11 md:h-12 text-sm md:text-base ${errors.service ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.service}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm">Estimated Budget</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => handleInputChange("budget", value)}
                      >
                        <SelectTrigger className="h-11 md:h-12 text-sm md:text-base">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`min-h-[120px] md:min-h-[150px] resize-none text-sm md:text-base ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Preparing..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs md:text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="text-accent hover:underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
