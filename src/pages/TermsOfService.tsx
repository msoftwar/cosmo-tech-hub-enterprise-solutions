import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "react-router-dom";
import { FileText, Scale, AlertTriangle, Briefcase, Globe, Mail, Calendar, CheckCircle2 } from "lucide-react";

const sections = [
  {
    icon: Briefcase,
    title: "Services & Engagement",
    content: [
      {
        subtitle: "Scope of Services",
        text: "Cosmo Tech Hub provides custom software development, web application development, mobile app development, AI solutions, and related technology consulting services. The specific scope of work for each project will be defined in a separate Statement of Work (SOW) or service agreement.",
      },
      {
        subtitle: "Project Agreements",
        text: "All projects are governed by individual contracts that outline deliverables, timelines, pricing, and specific terms. These project-specific agreements, together with these Terms of Service, form the complete agreement between you and Cosmo Tech Hub.",
      },
      {
        subtitle: "Client Responsibilities",
        text: "You agree to provide timely feedback, necessary access to systems and information, and cooperate in good faith throughout the project lifecycle. Delays caused by client actions may impact project timelines and costs.",
      },
    ],
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Ownership of Deliverables",
        text: "Upon full payment, you will own all rights to the custom software and deliverables created specifically for your project, unless otherwise specified in your project agreement. This includes source code, documentation, and related materials.",
      },
      {
        subtitle: "Pre-Existing Materials",
        text: "Cosmo Tech Hub retains ownership of all pre-existing intellectual property, tools, frameworks, and methodologies used in delivering services. You are granted a non-exclusive license to use these materials as part of your deliverables.",
      },
      {
        subtitle: "Third-Party Components",
        text: "Our solutions may incorporate open-source or third-party components. Such components are subject to their respective licenses, which will be disclosed and provided to you upon request.",
      },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Payment & Terms",
    content: [
      {
        subtitle: "Payment Schedule",
        text: "Payment terms will be specified in your project agreement. Typically, projects require an upfront deposit with milestone-based payments. All fees are due within 30 days of invoice unless otherwise agreed.",
      },
      {
        subtitle: "Late Payments",
        text: "Late payments may incur interest charges and could result in suspension of work. We reserve the right to retain deliverables until all outstanding payments are received.",
      },
      {
        subtitle: "Refunds",
        text: "Deposits are generally non-refundable and cover initial discovery and planning work. Refund eligibility for other payments will be determined on a case-by-case basis according to project-specific terms.",
      },
    ],
  },
  {
    icon: Globe,
    title: "Warranties & Limitations",
    content: [
      {
        subtitle: "Service Warranty",
        text: "We warrant that our services will be performed in a professional and workmanlike manner. We provide a 30-day warranty period after delivery during which we will fix any defects at no additional cost.",
      },
      {
        subtitle: "Limitation of Liability",
        text: "To the maximum extent permitted by law, Cosmo Tech Hub's total liability for any claims shall not exceed the amounts paid by you for the specific services giving rise to the claim.",
      },
      {
        subtitle: "No Guarantee of Results",
        text: "While we strive for excellence, we cannot guarantee specific business outcomes, revenue increases, or market performance resulting from our software solutions.",
      },
    ],
  },
];

const highlights = [
  "Professional service delivery",
  "Clear intellectual property rights",
  "Transparent payment terms",
  "30-day defect warranty",
  "Confidentiality protection",
  "Fair dispute resolution",
];

export default function TermsOfService() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-6">
              <FileText className="h-4 w-4 text-accent" />
              <span>Legal Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-heading font-bold text-surface-dark-foreground leading-tight">
              Terms of Service
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-surface-dark-foreground/70 leading-relaxed">
              Please read these terms carefully before engaging our services. They govern your use of our website and services.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-surface-dark-foreground/50">
              <Calendar className="h-4 w-4" />
              <span>Last updated: January 12, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <Section className="border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-center mb-8">
            Key Highlights
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm md:text-base font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12 md:mb-16">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Welcome to Cosmo Tech Hub. These Terms of Service ("Terms") govern your access to and use of our website, services, and any related content. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
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

          {/* Additional Terms */}
          <div className="mt-12 md:mt-16 space-y-8">
            <div className="p-6 md:p-8 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="font-heading font-bold text-lg md:text-xl mb-4">
                Confidentiality
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of engagement. This obligation survives the termination of any project or business relationship.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="font-heading font-bold text-lg md:text-xl mb-4">
                Governing Law & Disputes
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                These Terms shall be governed by the laws of the United Arab Emirates. Any disputes arising from these Terms or our services shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration in Dubai, UAE.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="font-heading font-bold text-lg md:text-xl mb-4">
                Modifications
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Your continued use of our services after any modifications indicates your acceptance of the updated Terms.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg md:text-xl mb-2">
                  Questions About These Terms?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service or need clarification, please contact us at:
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
              to="/privacy-policy"
              className="text-sm text-accent hover:underline"
            >
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
