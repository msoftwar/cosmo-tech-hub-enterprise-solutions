import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { FadeInUp, StaggerContainer, StaggerItem, GlowOrb } from "@/components/ui/motion";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Enterprise", "Fintech", "Healthcare", "E-Commerce", "AI/ML"];

const caseStudies = [
  {
    title: "AI-Powered Trading Platform",
    client: "Global Investment Bank",
    description: "Developed a real-time trading platform with AI-driven insights that processes over 10 million transactions daily with sub-millisecond latency.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "Kubernetes", "Redis", "PostgreSQL"],
    category: "Fintech",
  },
  {
    title: "Healthcare Data Analytics Suite",
    client: "Regional Hospital Network",
    description: "Built a comprehensive analytics platform that improved patient outcomes by 35% through predictive health monitoring and resource optimization.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "AWS"],
    category: "Healthcare",
  },
  {
    title: "Enterprise Resource Planning System",
    client: "Manufacturing Conglomerate",
    description: "Implemented a custom ERP solution that streamlined operations across 50+ facilities, reducing operational costs by 40%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Java", "Spring Boot", "Oracle", "React", "Docker"],
    category: "Enterprise",
  },
  {
    title: "Multi-Vendor Marketplace",
    client: "Regional E-Commerce Leader",
    description: "Launched a scalable marketplace platform supporting 10,000+ vendors and processing $50M+ in monthly transactions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "E-Commerce",
  },
  {
    title: "Intelligent Document Processing",
    client: "Legal Services Firm",
    description: "Created an AI system that automates document analysis and extraction, reducing processing time by 80% and improving accuracy.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    technologies: ["Python", "OpenAI", "FastAPI", "React", "PostgreSQL"],
    category: "AI/ML",
  },
  {
    title: "Real-Time Logistics Platform",
    client: "Shipping & Logistics Company",
    description: "Developed a comprehensive logistics management system with real-time tracking, route optimization, and predictive analytics.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Google Maps"],
    category: "Enterprise",
  },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden section-dark">
        <StarfieldBackground />
        <GlowOrb color="purple" size="xl" className="-top-40 -right-40 opacity-30" />
        <GlowOrb color="cyan" size="lg" className="bottom-0 -left-20 opacity-20" />
        
        <div className="container-wide relative z-10">
          <FadeInUp>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-surface-dark-foreground leading-tight">
                Transforming Ideas Into{" "}
                <span className="gradient-brand-text">Digital Reality</span>
              </h1>
              <p className="mt-6 text-xl text-surface-dark-foreground/70 leading-relaxed">
                Explore our portfolio of successful projects and discover how we've helped businesses 
                across industries achieve their digital transformation goals.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Filter Section */}
      <Section>
        <FadeInUp>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="h-5 w-5 text-muted-foreground mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <StaggerItem key={index}>
              <CaseStudyCard {...study} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Stats Section */}
      <Section dark>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+", label: "Industries Served" },
          ].map((stat, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-brand-text">
                  {stat.value}
                </div>
                <p className="mt-2 text-surface-dark-foreground/70">{stat.label}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="relative rounded-3xl bg-gradient-to-r from-accent/10 via-brand-purple/10 to-brand-cyan/10 border border-accent/20 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve your business goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+971569949346">Schedule a Call</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
