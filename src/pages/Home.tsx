import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProcessStep } from "@/components/cards/ProcessStep";
import {
  Globe,
  Smartphone,
  Bot,
  Code2,
  ArrowRight,
  Zap,
  Shield,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AIBackground } from "@/components/ui/AIBackground";
import { useRef } from "react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Enterprise web applications, SaaS platforms, and admin dashboards built with modern frameworks.",
    features: ["Angular & React", "API Integrations", "Cloud-Native"],
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

const techLogos = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "ASP.NET Core", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C#", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "SQL Server", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Android", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTech = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
        {/* AI Background */}
        <AIBackground />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/50 via-transparent to-surface-dark z-[1]" />

        {/* Content */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10 pt-24 md:pt-20">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 md:mb-8">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
              <span className="truncate">Enterprise Software Development</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-display font-heading font-bold text-white leading-tight">
              Building Scalable Digital Solutions for the{" "}
              <span className="gradient-brand-text">Modern World</span>
            </h1>

            <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              From web applications to AI-powered systems, we deliver
              enterprise-grade technology that drives performance, scalability,
              and business growth.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base">
                <a href="tel:+971569949346">Schedule a Call</a>
              </Button>
            </div>

            {/* Technologies Scrollable */}
            <div className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                <p className="text-[10px] sm:text-xs md:text-sm text-white/50 uppercase tracking-wider">
                  Technologies We Master
                </p>
                <div className="flex gap-1.5 sm:gap-2">
                  <button
                    onClick={() => scrollTech("left")}
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                  <button
                    onClick={() => scrollTech("right")}
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
              <div
                ref={scrollContainerRef}
                className="flex items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {techLogos.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 shrink-0"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <img
                        src={tech.url}
                        alt={tech.name}
                        className="h-full w-auto"
                      />
                    </div>
                    <span className="text-[9px] sm:text-[10px] md:text-xs text-white/60 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services">
        <SectionHeader
          eyebrow="Our Services"
          title="End-to-End Technology Solutions"
          description="We provide comprehensive software development services tailored to your business needs."
        />

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

        <div className="mt-10 md:mt-12 text-center">
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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Why Cosmo Tech Hub"
              title="Engineering Excellence Meets Business Understanding"
              description="We combine deep technical expertise with a strategic approach to deliver solutions that create real value."
              centered={false}
            />

            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
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
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-surface-dark-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-surface-dark-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl grid-pattern-dark border border-white/10 p-6 md:p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold gradient-brand-text mb-3 md:mb-4">
                  10+
                </div>
                <p className="text-lg md:text-xl text-surface-dark-foreground/70">
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

        <div className="mt-10 md:mt-16 max-w-2xl mx-auto">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-gradient-radial from-accent/30 to-transparent" />
        </div>

        <div className="relative text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-headline font-heading font-bold text-surface-dark-foreground">
            Ready to Build Something Powerful?
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-surface-dark-foreground/70">
            Let's discuss your project requirements and explore how we can help
            you achieve your goals.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/technologies">Explore Technologies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
