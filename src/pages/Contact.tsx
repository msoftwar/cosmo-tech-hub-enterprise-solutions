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
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

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

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
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
                    We've received your message and will get back to you within
                    24 hours. In the meantime, feel free to explore our
                    services.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 md:mt-8"
                    onClick={() => setIsSubmitted(false)}
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
                        required
                        className="h-11 md:h-12 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Smith"
                        required
                        className="h-11 md:h-12 text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="h-11 md:h-12 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="h-11 md:h-12 text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm">Service Interested In *</Label>
                      <Select required>
                        <SelectTrigger className="h-11 md:h-12 text-sm md:text-base">
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
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm">Estimated Budget</Label>
                      <Select>
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
                      required
                      className="min-h-[120px] md:min-h-[150px] resize-none text-sm md:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs md:text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy.
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
