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
  CheckCircle2,
  Star,
  TrendingUp,
  Clock,
} from "lucide-react";
import { AIBackground } from "@/components/ui/AIBackground";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  GlowOrb,
  AnimatedGradientText,
  AnimatedCounter,
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

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 200, suffix: "+", label: "Projects Delivered", icon: CheckCircle2 },
  { value: 50, suffix: "+", label: "Happy Clients", icon: Star },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: TrendingUp },
];

// Organized by category: Frontend, Backend, Databases, Cloud/Mobile
const techLogos = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "frontend" },
  { name: "Vue", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "frontend" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "backend" },
  { name: "ASP.NET", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", category: "backend" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "cloud" },
  { name: "Azure", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "cloud" },
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
        {/* AI Background */}
        <AIBackground />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern-dark z-[1]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark/90 to-surface-dark/80 z-[2]" />

        {/* Content */}
        <div className="w-full container-wide relative z-10 pt-24 lg:pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-white/80 mb-6"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-brand-cyan"
                  style={{ boxShadow: "0 0 10px hsl(var(--brand-cyan))" }}
                />
                <span>Enterprise Software Development</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-display font-heading text-white"
              >
                Building{" "}
                <span className="gradient-brand-text">Scalable</span>
                <br />
                Digital Solutions
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl"
              >
                From web applications to AI-powered systems, we deliver
                enterprise-grade technology that drives performance, scalability,
                and business growth.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <HoverScale>
                  <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto shadow-lg shadow-brand-cyan/25">
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </HoverScale>
                <HoverScale>
                  <Button variant="outline-light" size="lg" asChild className="w-full sm:w-auto backdrop-blur-sm">
                    <a href="tel:+971569949346">Schedule a Call</a>
                  </Button>
                </HoverScale>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                {[
                  { value: "10+", label: "Years" },
                  { value: "200+", label: "Projects" },
                  { value: "99%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-heading font-bold text-white">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block"
            >
              <HeroVisual />
            </motion.div>
          </div>

          {/* Technologies Auto-Scrolling */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 lg:mt-24 pt-8 border-t border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-white/40 uppercase tracking-widest font-mono">
                Technologies We Master
              </p>
            </div>
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex items-center gap-6 overflow-x-hidden pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[...techLogos, ...techLogos].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 shrink-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-3 flex items-center justify-center hover:bg-white/10 hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-cyan/20">
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className="h-full w-auto"
                    />
                  </div>
                  <span className="text-[10px] text-white/50 whitespace-nowrap font-mono">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-accent/20 mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl lg:text-5xl font-heading font-bold gradient-brand-text">
                <AnimatedCounter value={stat.value} />{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" dark className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark" />
        <GlowOrb color="cyan" size="xl" className="top-0 -left-48" />
        <GlowOrb color="purple" size="lg" className="bottom-0 right-0" />
        
        <FadeInUp className="relative">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-End Technology Solutions"
            description="We provide comprehensive software development services tailored to your business needs."
          />
        </FadeInUp>

        <StaggerContainer className="relative mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <FadeInUp delay={0.3} className="relative mt-12 text-center">
          <Button variant="outline-light" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeInUp>
      </Section>

      {/* Why Choose Us */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        
        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <SectionHeader
              eyebrow="Why Cosmo Tech Hub"
              title="Engineering Excellence Meets Business Understanding"
              description="We combine deep technical expertise with a strategic approach to deliver solutions that create real value."
              centered={false}
            />

            <StaggerContainer className="mt-10 space-y-4">
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
                    className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5"
                    whileHover={{ x: 10 }}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center shadow-lg shadow-brand-cyan/20">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
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
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-card to-secondary/50 border border-border/50 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <GlowOrb color="cyan" size="md" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="text-center relative z-10">
                  <motion.div 
                    className="text-7xl lg:text-8xl font-heading font-bold gradient-brand-text mb-4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    10+
                  </motion.div>
                  <p className="text-xl text-muted-foreground">
                    Years of Experience
                  </p>
                  <p className="text-sm text-muted-foreground/60 mt-2">
                    Delivering Excellence Since 2014
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" dark className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark" />
        <GlowOrb color="purple" size="lg" className="top-1/4 -right-24" />
        
        <FadeInUp className="relative">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Deliver Results"
            description="A proven methodology that ensures quality, transparency, and on-time delivery."
          />
        </FadeInUp>

        <StaggerContainer className="relative mt-16 max-w-3xl mx-auto">
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
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <GlowOrb color="cyan" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <FadeInUp className="relative text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            Let's Build Together
          </span>
          <h2 className="text-headline font-heading font-bold">
            Ready to Transform Your{" "}
            <span className="gradient-brand-text">Business?</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Let's discuss your project requirements and explore how we can help
            you achieve your goals with cutting-edge technology.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <HoverScale>
              <Button variant="gradient" size="lg" asChild className="shadow-lg shadow-brand-cyan/25">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </HoverScale>
            <HoverScale>
              <Button variant="outline" size="lg" asChild>
                <Link to="/technologies">Explore Technologies</Link>
              </Button>
            </HoverScale>
          </div>
        </FadeInUp>
      </Section>
    </Layout>
  );
}
