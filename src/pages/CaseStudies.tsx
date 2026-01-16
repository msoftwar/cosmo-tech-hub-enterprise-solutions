import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { FadeInUp, StaggerContainer, StaggerItem, GlowOrb, HoverScale } from "@/components/ui/motion";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Enterprise", "Fintech", "Automotive", "E-Commerce", "AI/ML"];

const caseStudies = [
  {
    title: "AI-Powered Vehicle Inspection System",
    client: "Automotive Technology Company",
    description: "Developed an intelligent vehicle inspection platform using AI to detect scratches, dents, and body damage with 98% accuracy. Automated inspection reports for insurance and dealerships.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "AWS"],
    category: "AI/ML",
  },
  {
    title: "Online Vehicle Auction Platform",
    client: "Regional Automotive Marketplace",
    description: "Built a comprehensive online auction platform for vehicles with real-time bidding, secure payments, and dealer management. Processing 5000+ vehicle auctions monthly.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    technologies: [".NET Core", "Angular", "SQL Server", "SignalR", "Azure"],
    category: "Automotive",
  },
  {
    title: "Enterprise Leave & Reimbursement System",
    client: "Corporate HR Solutions",
    description: "Implemented a complete HR management system handling leave requests, expense reimbursements, and payroll integration for 10,000+ employees across multiple locations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    technologies: [".NET Core", "Angular", "SQL Server", "Azure AD", "Power BI"],
    category: "Enterprise",
  },
  {
    title: "Multi-Vendor Marketplace Platform",
    client: "Regional E-Commerce Leader",
    description: "Launched a scalable marketplace platform supporting 10,000+ vendors with advanced product management, order fulfillment, and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: [".NET Core", "Angular", "SQL Server", "Stripe", "Azure"],
    category: "E-Commerce",
  },
  {
    title: "AI-Powered Trading Predictions",
    client: "Global Investment Firm",
    description: "Developed a real-time trading prediction system with AI-driven market analysis and automated trading signals. Improved trading accuracy by 40%.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "Kubernetes", "Redis", "PostgreSQL"],
    category: "Fintech",
  },
  {
    title: "Enterprise Resource Planning System",
    client: "Manufacturing Conglomerate",
    description: "Implemented a custom ERP solution that streamlined operations across 50+ facilities, reducing operational costs by 40%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: [".NET Core", "Angular", "SQL Server", "Docker", "Azure"],
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
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
            </FadeInUp>

            {/* Stats Grid */}
            <FadeInUp delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "200+", label: "Solutions Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "15+", label: "Countries Served" },
                  { value: "10+", label: "Years of Excellence" },
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

      {/* CTA Section */}
      <Section>
        <div className="relative rounded-3xl bg-gradient-to-r from-accent/10 via-brand-purple/10 to-brand-cyan/10 border border-accent/20 p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Ready to Build Something Amazing?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Let's discuss your project and explore how we can help you achieve your business goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </Section>
    </Layout>
  );
}