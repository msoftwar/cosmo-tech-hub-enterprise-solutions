import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileText, Mail, Calendar } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you contact us through our website, we may collect personal information such as your name, email address, phone number, company name, and project details. This information is provided voluntarily when you fill out our contact form or communicate with us directly.",
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This data helps us analyze website traffic and improve user experience.",
      },
      {
        subtitle: "Cookies and Tracking",
        text: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie settings through your browser preferences.",
      },
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your personal information to respond to inquiries, provide quotes, deliver our software development services, and communicate about project progress and updates.",
      },
      {
        subtitle: "Business Operations",
        text: "Your information helps us improve our services, develop new features, conduct market research, and send relevant communications about our offerings (with your consent where required).",
      },
      {
        subtitle: "Legal Compliance",
        text: "We may process your information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.",
      },
    ],
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard security measures including encryption, secure servers, access controls, and regular security audits to protect your personal information from unauthorized access, alteration, or disclosure.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law or for legitimate business purposes.",
      },
      {
        subtitle: "Third-Party Services",
        text: "We may share information with trusted third-party service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Your Rights & Choices",
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access, update, or correct your personal information at any time. Contact us to request a copy of your data or to make corrections.",
      },
      {
        subtitle: "Deletion Requests",
        text: "You may request deletion of your personal information, subject to certain legal exceptions. We will respond to such requests within 30 days.",
      },
      {
        subtitle: "Marketing Communications",
        text: "You can opt out of receiving promotional communications from us at any time by clicking the unsubscribe link in our emails or contacting us directly.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span>Legal Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-heading font-bold text-surface-dark-foreground leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-surface-dark-foreground/70 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-surface-dark-foreground/50">
              <Calendar className="h-4 w-4" />
              <span>Last updated: January 12, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12 md:mb-16">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Cosmo Tech Hub ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes our practices regarding the collection, use, and disclosure of information when you use our website and services. By accessing our website or using our services, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12 md:space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <section.icon className="h-6 w-6 md:h-7 md:w-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="pl-0 md:pl-20 space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-5 md:p-6 rounded-xl bg-secondary/50 border border-border">
                      <h3 className="font-semibold text-base md:text-lg mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg md:text-xl mb-2">
                  Questions About This Policy?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <a
                  href="mailto:mmatiullah552@gmail.com"
                  className="text-accent hover:underline font-medium"
                >
                  mmatiullah552@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 md:mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cosmo Tech Hub. All rights reserved.
            </p>
            <Link
              to="/terms-of-service"
              className="text-sm text-accent hover:underline"
            >
              View Terms of Service →
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
