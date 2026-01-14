import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Bot,
  Code2,
  Cloud,
  CheckCircle2,
  BarChart3,
  Database,
} from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  GlowOrb,
  AnimatedGradientText,
} from "@/components/ui/motion";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Application Development",
    description:
      "We build robust, scalable web applications using modern frameworks and best practices. From complex SaaS platforms to enterprise admin dashboards, our solutions are designed for performance and maintainability.",
    features: [
      "Single Page Applications (Angular, React, Vue)",
      "Progressive Web Apps (PWA)",
      "Enterprise SaaS Platforms",
      "Admin Dashboards & Portals",
      "E-commerce Solutions",
      "API Development & Integration",
    ],
    technologies: ["Angular", "React", "Vue", "Node.js", ".NET", "PostgreSQL"],
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
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with our comprehensive analytics solutions. We help businesses make data-driven decisions through advanced visualization and statistical analysis.",
    features: [
      "Business Intelligence Dashboards",
      "Interactive Data Visualization",
      "KPI Monitoring & Reporting",
      "Predictive Analytics & Forecasting",
      "Customer Behavior Analysis",
      "Real-time Analytics Pipelines",
    ],
    technologies: ["Power BI", "Tableau", "Python", "R", "Apache Spark", "Looker"],
  },
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust data infrastructure that powers your analytics and AI initiatives. We design and implement scalable data pipelines, warehouses, and lakes that ensure data quality and accessibility.",
    features: [
      "ETL/ELT Pipeline Development",
      "Data Warehouse Architecture",
      "Data Lake Implementation",
      "Real-time Stream Processing",
      "Data Quality & Governance",
      "Database Optimization & Migration",
    ],
    technologies: ["Apache Kafka", "Snowflake", "Databricks", "Airflow", "dbt", "BigQuery"],
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
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <GlowOrb color="purple" size="xl" className="top-0 -right-48" />
        <GlowOrb color="blue" size="lg" className="bottom-0 -left-24" />
        <div className="container-wide relative">
          <FadeInUp>
            <div className="max-w-3xl">
              <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-accent mb-3 md:mb-4">
                Our Services
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-heading font-bold text-surface-dark-foreground leading-tight">
                Technology Solutions That{" "}
                <AnimatedGradientText>Drive Results</AnimatedGradientText>
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-xl text-surface-dark-foreground/70 leading-relaxed">
                End-to-end software development services designed for businesses
                that demand quality, scalability, and reliability.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <Section key={service.id} dark={index % 2 === 1} id={service.id} className="relative overflow-hidden">
          {index % 2 === 1 && (
            <GlowOrb color="accent" size="md" className="top-1/2 right-0 -translate-y-1/2" />
          )}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeInUp className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <HoverScale>
                  <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center shadow-lg shadow-accent/20">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                </HoverScale>
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
                    <HoverScale key={tech} scale={1.05}>
                      <span
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          index % 2 === 1
                            ? "bg-white/10 text-surface-dark-foreground hover:bg-white/20 border border-white/10"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                        }`}
                      >
                        {tech}
                      </span>
                    </HoverScale>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div
                className={`rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                  index % 2 === 1
                    ? "border-white/10 bg-white/5 hover:border-accent/30 hover:shadow-accent/10"
                    : "border-border bg-gradient-to-br from-card to-secondary/50 hover:border-accent/30 hover:shadow-accent/5"
                }`}
              >
                <h4 className="font-heading font-semibold mb-6">
                  What We Deliver
                </h4>
                <StaggerContainer>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <StaggerItem key={featureIndex}>
                        <li className="flex items-start gap-3 group">
                          <CheckCircle2
                            className="h-5 w-5 shrink-0 mt-0.5 text-accent group-hover:scale-110 transition-transform duration-300"
                          />
                          <span
                            className={`group-hover:translate-x-1 transition-transform duration-300 ${
                              index % 2 === 1
                                ? "text-surface-dark-foreground/80"
                                : "text-foreground/80"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </StaggerContainer>
              </div>
            </FadeInUp>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section dark className="relative overflow-hidden">
        <GlowOrb color="accent" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb color="purple" size="lg" className="top-0 right-0" />

        <FadeInUp className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-headline text-surface-dark-foreground">
            Ready to Start Your{" "}
            <AnimatedGradientText>Project?</AnimatedGradientText>
          </h2>
          <p className="mt-6 text-xl text-surface-dark-foreground/70">
            Tell us about your requirements and we'll provide a detailed
            proposal within 48 hours.
          </p>
          <div className="mt-10">
            <HoverScale>
              <Button variant="gradient" size="xl" asChild className="shadow-lg shadow-accent/25">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </HoverScale>
          </div>
        </FadeInUp>
      </Section>
    </Layout>
  );
}
