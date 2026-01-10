import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, Users, Award, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure success by the tangible outcomes we deliver for your business.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to bring you cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We work as an extension of your team, not just a vendor.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description:
      "Every line of code meets our rigorous standards for excellence.",
  },
];

const milestones = [
  { year: "2014", event: "Founded in San Francisco" },
  { year: "2016", event: "Expanded to enterprise clients" },
  { year: "2018", event: "Launched AI solutions division" },
  { year: "2020", event: "Global remote team established" },
  { year: "2023", event: "150+ projects completed" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              About Us
            </span>
            <h1 className="text-display text-surface-dark-foreground">
              Engineering the Future of{" "}
              <span className="gradient-brand-text">Digital Business</span>
            </h1>
            <p className="mt-6 text-xl text-surface-dark-foreground/70 leading-relaxed">
              Cosmo Tech Hub is a technology company focused on building
              scalable, secure, and high-performance software solutions for
              businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-title">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower businesses with technology that drives growth. We
              believe great software is not just about code—it's about solving
              real problems, enabling efficiency, and creating competitive
              advantages for our clients.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-title">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the trusted technology partner for ambitious companies
              worldwide. We envision a future where every business has access to
              enterprise-grade technology, regardless of their size or
              industry.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <SectionHeader
          eyebrow="Our Values"
          title="What Guides Our Work"
          description="The principles that define how we approach every project and relationship."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <value.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-surface-dark-foreground">
                {value.title}
              </h3>
              <p className="text-surface-dark-foreground/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader
          eyebrow="Our Journey"
          title="A Decade of Building Excellence"
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-6 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full gradient-brand md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="inline-block text-2xl font-heading font-bold gradient-brand-text mb-2">
                    {milestone.year}
                  </span>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Global Reach */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-2xl gradient-brand flex items-center justify-center mb-8">
            <Globe className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-headline text-surface-dark-foreground">
            Global Reach, Local Expertise
          </h2>
          <p className="mt-6 text-xl text-surface-dark-foreground/70">
            Headquartered in San Francisco with team members across the globe,
            we bring diverse perspectives and round-the-clock capabilities to
            every project.
          </p>
          <div className="mt-10">
            <Button variant="gradient" size="xl" asChild>
              <Link to="/contact">
                Work With Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
