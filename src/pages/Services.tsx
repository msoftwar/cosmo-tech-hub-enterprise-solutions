import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Bot,
  Cpu,
  Code2,
  Database,
  Cloud,
  Settings,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Application Development",
    description:
      "We build robust, scalable web applications using modern frameworks and best practices. From complex SaaS platforms to enterprise admin dashboards, our solutions are designed for performance and maintainability.",
    features: [
      "Single Page Applications (React, Angular, Vue)",
      "Progressive Web Apps (PWA)",
      "Enterprise SaaS Platforms",
      "Admin Dashboards & Portals",
      "E-commerce Solutions",
      "API Development & Integration",
    ],
    technologies: ["React", "Next.js", "Angular", "Node.js", ".NET", "PostgreSQL"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences. We focus on performance, security, and seamless integration with your existing systems.",
    features: [
      "iOS & Android Native Apps",
      "Cross-Platform Development (Flutter, React Native)",
      "Offline-First Architecture",
      "Push Notifications & Real-Time Updates",
      "Secure Authentication & Data Handling",
      "App Store Optimization",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Solutions",
    description:
      "Intelligent systems that automate workflows, enhance customer experiences, and unlock insights from your data. We specialize in practical AI implementations that deliver measurable ROI.",
    features: [
      "Custom AI Chatbots (Support, Sales, CRM)",
      "AI Agents for Task Automation",
      "Natural Language Processing",
      "Document Analysis & Extraction",
      "Predictive Analytics",
      "LLM Integration & Fine-tuning",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "TensorFlow", "Anthropic"],
  },
  {
    id: "custom",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to solve your unique business challenges. We build software that fits your processes, not the other way around.",
    features: [
      "Business Process Automation",
      "System Integration & Middleware",
      "Legacy System Modernization",
      "Custom CRM & ERP Solutions",
      "Workflow Management Systems",
      "Data Migration & ETL",
    ],
    technologies: [".NET", "Java", "Python", "SQL Server", "Docker", "Kubernetes"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure and DevOps practices that ensure your applications are secure, scalable, and always available.",
    features: [
      "Cloud Migration (AWS, Azure, GCP)",
      "Infrastructure as Code",
      "CI/CD Pipeline Setup",
      "Container Orchestration",
      "Monitoring & Alerting",
      "Security & Compliance",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Our Services
            </span>
            <h1 className="text-display text-surface-dark-foreground">
              Technology Solutions That{" "}
              <span className="gradient-brand-text">Drive Results</span>
            </h1>
            <p className="mt-6 text-xl text-surface-dark-foreground/70 leading-relaxed">
              End-to-end software development services designed for businesses
              that demand quality, scalability, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <Section key={service.id} dark={index % 2 === 1} id={service.id}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-title">{service.title}</h2>
              </div>

              <p
                className={`text-lg leading-relaxed ${
                  index % 2 === 1
                    ? "text-surface-dark-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <div className="mt-8">
                <h4 className="font-heading font-semibold mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index % 2 === 1
                          ? "bg-white/10 text-surface-dark-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div
                className={`rounded-2xl border p-8 ${
                  index % 2 === 1
                    ? "border-white/10 bg-white/5"
                    : "border-border bg-secondary/50"
                }`}
              >
                <h4 className="font-heading font-semibold mb-6">
                  What We Deliver
                </h4>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`h-5 w-5 shrink-0 mt-0.5 ${
                          index % 2 === 1 ? "text-accent" : "text-accent"
                        }`}
                      />
                      <span
                        className={
                          index % 2 === 1
                            ? "text-surface-dark-foreground/80"
                            : "text-foreground/80"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/30 to-transparent" />
        </div>

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-headline text-surface-dark-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="mt-6 text-xl text-surface-dark-foreground/70">
            Tell us about your requirements and we'll provide a detailed
            proposal within 48 hours.
          </p>
          <div className="mt-10">
            <Button variant="gradient" size="xl" asChild>
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
