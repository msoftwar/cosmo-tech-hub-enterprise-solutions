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
  BarChart3,
  Database,
} from "lucide-react";
import { ParticleField } from "@/components/ui/ParticleField";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  GlowOrb,
  AnimatedGradientText,
  FloatingElement,
} from "@/components/ui/motion";

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
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics and visualization solutions.",
    features: ["Business Intelligence", "Data Visualization", "Predictive Analytics"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust data pipelines and infrastructure to power your data-driven decisions.",
    features: ["ETL Pipelines", "Data Warehousing", "Real-time Processing"],
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

// Organized by category: Frontend, Backend, Databases, Cloud/Mobile
const techLogos = [
  // Frontend
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "frontend" },
  { name: "Vue", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "frontend" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
  // Backend
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "ASP.NET Core", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", category: "backend" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "backend" },
  { name: "C#", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", category: "backend" },
  // Databases
  { name: "SQL Server", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", category: "database" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database" },
  // Cloud & Mobile
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "cloud" },
  { name: "Azure", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "cloud" },
  { name: "Android", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", category: "mobile" },
  { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "mobile" },
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
        {/* Particle Field Background */}
        <ParticleField className="z-[1]" />
        
        {/* Animated Glow Orbs */}
        <GlowOrb color="purple" size="xl" className="top-1/4 -left-48 z-0" />
        <GlowOrb color="blue" size="lg" className="bottom-1/4 right-0 z-0" />
        <GlowOrb color="red" size="md" className="top-1/2 left-1/3 z-0" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/40 to-surface-dark z-[2]" />

        {/* Content */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10 pt-24 md:pt-20">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 md:mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
              </motion.div>
              <span className="truncate">Enterprise Software Development</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-display font-heading font-bold text-white leading-tight"
            >
              Building Scalable Digital Solutions for the{" "}
              <AnimatedGradientText>Modern World</AnimatedGradientText>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              From web applications to AI-powered systems, we deliver
              enterprise-grade technology that drives performance, scalability,
              and business growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <HoverScale>
                <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base shadow-lg shadow-accent/25">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </HoverScale>
              <HoverScale>
                <Button variant="outline-light" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base backdrop-blur-sm">
                  <a href="tel:+971569949346">Schedule a Call</a>
                </Button>
              </HoverScale>
            </motion.div>

            {/* Technologies Auto-Scrolling */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-white/10"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                <p className="text-[10px] sm:text-xs md:text-sm text-white/50 uppercase tracking-wider">
                  Technologies We Master
                </p>
                <span className="text-[10px] sm:text-xs text-white/30">
                  {isPaused ? "Paused" : "Auto-scrolling"}
                </span>
              </div>
              <div
                ref={scrollContainerRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="flex items-center gap-3 sm:gap-4 md:gap-6 overflow-x-hidden pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Duplicate logos for seamless infinite scroll */}
                {[...techLogos, ...techLogos].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 shrink-0"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-2 sm:p-2.5 flex items-center justify-center hover:bg-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                      <img
                        src={tech.url}
                        alt={tech.name}
                        className="h-full w-auto"
                      />
                    </div>
                    <span className="text-[9px] sm:text-[10px] md:text-xs text-white/60 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services">
        <FadeInUp>
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-End Technology Solutions"
            description="We provide comprehensive software development services tailored to your business needs."
          />
        </FadeInUp>

        <StaggerContainer className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <HoverScale>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.3} className="mt-10 md:mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeInUp>
      </Section>

      {/* Why Choose Us */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeInUp>
            <SectionHeader
              eyebrow="Why Cosmo Tech Hub"
              title="Engineering Excellence Meets Business Understanding"
              description="We combine deep technical expertise with a strategic approach to deliver solutions that create real value."
              centered={false}
            />

            <StaggerContainer className="mt-8 md:mt-10 space-y-5 md:space-y-6">
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
                <StaggerItem key={index}>
                  <motion.div 
                    className="flex gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-accent/30 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-brand flex items-center justify-center shadow-lg shadow-accent/20">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-surface-dark-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm md:text-base text-surface-dark-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="relative">
              <FloatingElement duration={8}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern-dark opacity-30" />
                  <GlowOrb color="accent" size="md" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="text-center relative z-10">
                    <motion.div 
                      className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold gradient-brand-text mb-3 md:mb-4"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, type: "spring" }}
                    >
                      10+
                    </motion.div>
                    <p className="text-lg md:text-xl text-surface-dark-foreground/70">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process">
        <FadeInUp>
          <SectionHeader
            eyebrow="Our Process"
            title="How We Deliver Results"
            description="A proven methodology that ensures quality, transparency, and on-time delivery."
          />
        </FadeInUp>

        <StaggerContainer className="mt-10 md:mt-16 max-w-2xl mx-auto">
          {processSteps.map((step, index) => (
            <StaggerItem key={index}>
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA Section */}
      <Section dark className="relative overflow-hidden">
        <GlowOrb color="accent" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb color="purple" size="lg" className="top-0 right-0" />
        <GlowOrb color="blue" size="lg" className="bottom-0 left-0" />

        <FadeInUp className="relative text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-headline font-heading font-bold text-surface-dark-foreground">
            Ready to Build Something{" "}
            <AnimatedGradientText>Powerful?</AnimatedGradientText>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-surface-dark-foreground/70">
            Let's discuss your project requirements and explore how we can help
            you achieve your goals.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <HoverScale>
              <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto shadow-lg shadow-accent/25">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </HoverScale>
            <HoverScale>
              <Button variant="outline-light" size="lg" asChild className="w-full sm:w-auto backdrop-blur-sm">
                <Link to="/technologies">Explore Technologies</Link>
              </Button>
            </HoverScale>
          </div>
        </FadeInUp>
      </Section>
    </Layout>
  );
}
