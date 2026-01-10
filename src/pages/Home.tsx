import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProcessStep } from "@/components/cards/ProcessStep";
import { StatCard } from "@/components/cards/StatCard";
import {
  Globe,
  Smartphone,
  Bot,
  Code2,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Enterprise web applications, SaaS platforms, and admin dashboards built with modern frameworks.",
    features: ["React & Next.js", "API Integrations", "Cloud-Native"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with secure architecture.",
    features: ["iOS & Android", "Flutter & React Native", "Offline Support"],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Intelligent chatbots and AI agents that automate workflows and enhance customer experiences.",
    features: ["Custom Chatbots", "Process Automation", "LLM Integration"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions designed to solve your unique business challenges.",
    features: ["System Integration", "Legacy Modernization", "Scalable Design"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your requirements, understand your business goals, and identify the optimal technical approach.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Architecture design, technology selection, and detailed project roadmap with clear milestones.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile development with regular updates, code reviews, and continuous integration.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Comprehensive testing including unit tests, integration tests, and performance optimization.",
  },
  {
    number: "05",
    title: "Deployment & Support",
    description:
      "Seamless deployment to production with ongoing maintenance and technical support.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const techLogos = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: ".NET", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/95 to-surface-dark/80" />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-8">
              <Zap className="h-4 w-4 text-accent" />
              Enterprise Software Development
            </div>

            <h1 className="text-display text-white">
              Building Scalable Digital Solutions for the{" "}
              <span className="gradient-brand-text">Modern World</span>
            </h1>

            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              From web applications to AI-powered systems, we deliver
              enterprise-grade technology that drives performance, scalability,
              and business growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="gradient" size="xl" asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 mb-6 uppercase tracking-wider">
                Technologies We Master
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {techLogos.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.url}
                    alt={tech.name}
                    className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <SectionHeader
          eyebrow="Our Services"
          title="End-to-End Technology Solutions"
          description="We provide comprehensive software development services tailored to your business needs."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Why Cosmo Tech Hub"
              title="Engineering Excellence Meets Business Understanding"
              description="We combine deep technical expertise with a strategic approach to deliver solutions that create real value."
              centered={false}
            />

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Enterprise-Grade Security",
                  description:
                    "SOC 2 compliant practices, encrypted data handling, and regular security audits.",
                },
                {
                  icon: Zap,
                  title: "Performance Optimized",
                  description:
                    "Sub-second load times, efficient database queries, and scalable architecture.",
                },
                {
                  icon: Users,
                  title: "Dedicated Team",
                  description:
                    "Senior engineers assigned to your project with direct communication.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-dark-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-surface-dark-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl grid-pattern-dark border border-white/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl lg:text-7xl font-heading font-bold gradient-brand-text mb-4">
                  10+
                </div>
                <p className="text-xl text-surface-dark-foreground/70">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process">
        <SectionHeader
          eyebrow="Our Process"
          title="How We Deliver Results"
          description="A proven methodology that ensures quality, transparency, and on-time delivery."
        />

        <div className="mt-16 max-w-2xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/30 to-transparent" />
        </div>

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-headline text-surface-dark-foreground">
            Ready to Build Something Powerful?
          </h2>
          <p className="mt-6 text-xl text-surface-dark-foreground/70">
            Let's discuss your project requirements and explore how we can help
            you achieve your goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <Link to="/technologies">Explore Technologies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
