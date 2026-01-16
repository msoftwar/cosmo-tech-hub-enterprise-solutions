import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FadeInUp, StaggerContainer, StaggerItem, GlowOrb, HoverScale } from "@/components/ui/motion";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Lightbulb, Users, Award, Globe, Shield, Heart, CheckCircle, TrendingUp, Layers, Cpu } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by the tangible outcomes we deliver for your business.",
    color: "accent",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to bring you cutting-edge solutions.",
    color: "brand-purple",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work as an extension of your team, not just a vendor.",
    color: "brand-cyan",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description: "Every line of code meets our rigorous standards for excellence.",
    color: "brand-red",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "We build with security at the core, protecting your data and users.",
    color: "accent",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We're invested in your long-term growth.",
    color: "brand-purple",
  },
];

const milestones = [
  { year: "2014", event: "Founded in Dubai, UAE", description: "Started with a vision to transform businesses through technology" },
  { year: "2016", event: "Expanded to enterprise clients", description: "Secured partnerships with Fortune 500 companies" },
  { year: "2018", event: "Launched AI solutions division", description: "Pioneered AI-driven solutions for business automation" },
  { year: "2020", event: "Global team established", description: "Expanded operations across 3 countries and 50+ team members" },
  { year: "2022", event: "Cloud infrastructure division", description: "Launched dedicated cloud consulting and DevOps services" },
  { year: "2024", event: "Serving clients worldwide", description: "200+ successful projects across 15+ industries" },
];

const techStack = [
  { name: ".NET & C#", description: "Enterprise-grade backend development" },
  { name: "Angular & React", description: "Modern frontend frameworks" },
  { name: "Python & AI/ML", description: "Intelligent automation solutions" },
  { name: "Cloud & DevOps", description: "Scalable infrastructure" },
];

const capabilities = [
  { icon: Cpu, title: "Enterprise Software", description: "Custom ERP, CRM, and business process automation systems" },
  { icon: TrendingUp, title: "Data & Analytics", description: "Business intelligence and predictive analytics solutions" },
  { icon: Layers, title: "System Integration", description: "Seamless integration of legacy and modern systems" },
  { icon: CheckCircle, title: "Quality Assurance", description: "Comprehensive testing and security auditing" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden section-dark">
        <StarfieldBackground />
        <GlowOrb color="purple" size="xl" className="-top-40 -right-40 opacity-30" />
        <GlowOrb color="cyan" size="lg" className="bottom-0 -left-20 opacity-20" />
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                About Cosmo Tech Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-surface-dark-foreground leading-tight">
                Engineering the Future of{" "}
                <span className="gradient-brand-text">Digital Business</span>
              </h1>
              <p className="mt-6 text-xl text-surface-dark-foreground/70 leading-relaxed">
                We're a global technology company focused on building scalable, secure, 
                and high-performance software solutions that drive real business results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="gradient" size="xl" asChild className="bg-gradient-to-r from-brand-purple to-brand-cyan">
                  <Link to="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </FadeInUp>
            
            {/* Stats Grid */}
            <FadeInUp delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "10+", label: "Years of Excellence" },
                  { value: "200+", label: "Solutions Delivered" },
                  { value: "50+", label: "Expert Engineers" },
                  { value: "15+", label: "Countries Served" },
                ].map((stat, index) => (
                  <HoverScale key={index}>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                      <div className="text-3xl md:text-4xl font-heading font-bold gradient-brand-text">
                        {stat.value}
                      </div>
                      <p className="mt-2 text-sm text-surface-dark-foreground/60">{stat.label}</p>
                    </div>
                  </HoverScale>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeInUp>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center shadow-lg shadow-accent/25">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="pt-8">
                <h2 className="text-2xl font-heading font-bold text-foreground">Our Mission</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with technology that drives growth. We believe great software 
                  is not just about code—it's about solving real problems, enabling efficiency, and 
                  creating competitive advantages for our clients.
                </p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border border-brand-purple/20">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-purple/25">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div className="pt-8">
                <h2 className="text-2xl font-heading font-bold text-foreground">Our Vision</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  To be the trusted technology partner for ambitious companies worldwide. We envision 
                  a future where every business has access to enterprise-grade technology, regardless 
                  of their size or industry.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <SectionHeader
          eyebrow="Our Values"
          title="What Guides Our Work"
          description="The principles that define how we approach every project and relationship."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <HoverScale>
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm h-full group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <value.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-surface-dark-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-surface-dark-foreground/70">
                      {value.description}
                    </p>
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* What We Do Best - Replaces Team Section */}
      <Section>
        <SectionHeader
          eyebrow="Our Expertise"
          title="What We Do Best"
          description="Comprehensive technology solutions tailored to your business needs."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <StaggerItem key={index}>
              <HoverScale>
                <div className="relative p-6 rounded-2xl border border-border bg-card h-full group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <capability.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">
                      {capability.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Technology Stack */}
        <FadeInUp delay={0.2}>
          <div className="mt-16 p-8 rounded-3xl bg-muted/50 border border-border">
            <h3 className="text-xl font-heading font-bold text-foreground text-center mb-8">Our Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading font-semibold text-foreground">{tech.name}</div>
                  <p className="text-xs text-muted-foreground mt-1">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </Section>

      {/* Timeline */}
      <Section dark>
        <SectionHeader
          eyebrow="Our Journey"
          title="A Decade of Building Excellence"
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-brand-purple to-brand-cyan md:-translate-x-0.5" />

            {milestones.map((milestone, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <motion.div
                  className={`relative flex items-start gap-8 pb-12 last:pb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full gradient-brand md:-translate-x-1/2 z-10 shadow-lg shadow-accent/50" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="inline-block text-2xl font-heading font-bold gradient-brand-text">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-surface-dark-foreground mt-2">
                        {milestone.event}
                      </h3>
                      <p className="text-surface-dark-foreground/70 mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </Section>

      {/* Global Reach */}
      <Section>
        <div className="relative rounded-3xl bg-gradient-to-r from-accent/10 via-brand-purple/10 to-brand-cyan/10 border border-accent/20 p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <GlowOrb color="accent" size="lg" className="-top-20 -left-20 opacity-30" />
          <GlowOrb color="purple" size="md" className="-bottom-10 -right-10 opacity-30" />
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:max-w-2xl">
                <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mb-6 shadow-lg shadow-accent/25">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Global Reach, Local Expertise
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Headquartered in Dubai with offices in the UK and Pakistan, we bring diverse 
                  perspectives and round-the-clock capabilities to every project.
                </p>
                
                <div className="mt-6 flex flex-wrap items-center gap-6">
                  {["Dubai, UAE", "Peterborough, UK", "Islamabad, Pakistan"].map((location, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full gradient-brand" />
                      <span className="font-medium text-foreground">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}