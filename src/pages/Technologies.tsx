import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const techCategories = [
  {
    name: "Frontend",
    description: "Modern frameworks for responsive, performant user interfaces",
    technologies: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Component-based UI library",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        description: "React framework for production",
      },
      {
        name: "Angular",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        description: "Enterprise web platform",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        description: "Type-safe JavaScript",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        description: "Utility-first CSS framework",
      },
    ],
  },
  {
    name: "Backend",
    description: "Robust server-side technologies for scalable applications",
    technologies: [
      {
        name: ".NET",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        description: "Enterprise-grade platform",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "JavaScript runtime",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "Versatile backend language",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        description: "Enterprise Java applications",
      },
    ],
  },
  {
    name: "Databases",
    description: "Reliable data storage solutions for every use case",
    technologies: [
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        description: "Advanced relational database",
      },
      {
        name: "SQL Server",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        description: "Microsoft enterprise DB",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        description: "Document database",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        description: "In-memory data store",
      },
    ],
  },
  {
    name: "Mobile",
    description: "Cross-platform and native mobile development",
    technologies: [
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        description: "Cross-platform UI toolkit",
      },
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Native mobile with React",
      },
      {
        name: "Swift",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        description: "iOS native development",
      },
      {
        name: "Kotlin",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        description: "Android native development",
      },
    ],
  },
  {
    name: "AI & Machine Learning",
    description: "Cutting-edge AI technologies for intelligent solutions",
    technologies: [
      {
        name: "OpenAI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        description: "GPT models & APIs",
      },
      {
        name: "TensorFlow",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        description: "ML framework",
      },
      {
        name: "PyTorch",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        description: "Deep learning platform",
      },
      {
        name: "LangChain",
        logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
        description: "LLM application framework",
      },
    ],
  },
  {
    name: "Cloud & DevOps",
    description: "Infrastructure and deployment automation",
    technologies: [
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        description: "Amazon Web Services",
      },
      {
        name: "Azure",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        description: "Microsoft Cloud",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        description: "Container platform",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        description: "Container orchestration",
      },
      {
        name: "GitHub Actions",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        description: "CI/CD automation",
      },
    ],
  },
];

export default function Technologies() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-accent mb-3 md:mb-4">
              Technologies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-heading font-bold text-surface-dark-foreground leading-tight">
              Modern Tech Stack for{" "}
              <span className="gradient-brand-text">Enterprise Solutions</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-surface-dark-foreground/70 leading-relaxed">
              We use industry-leading technologies to build secure, scalable,
              and maintainable software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      {techCategories.map((category, index) => (
        <Section key={category.name} dark={index % 2 === 1}>
          <SectionHeader
            eyebrow={category.name}
            title={category.description}
            centered={false}
            className="mb-12"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.technologies.map((tech) => (
              <div
                key={tech.name}
                className={`group p-6 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 1
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-border bg-card hover:shadow-lg hover:border-accent/30"
                }`}
              >
                <div className="h-14 flex items-center justify-center mb-4">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h4
                  className={`font-semibold mb-1 ${
                    index % 2 === 1 ? "text-surface-dark-foreground" : ""
                  }`}
                >
                  {tech.name}
                </h4>
                <p
                  className={`text-sm ${
                    index % 2 === 1
                      ? "text-surface-dark-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {tech.description}
                </p>
              </div>
            ))}
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
            Need a Custom Technology Stack?
          </h2>
          <p className="mt-6 text-xl text-surface-dark-foreground/70">
            We'll recommend the optimal technologies based on your project
            requirements, scalability needs, and team expertise.
          </p>
          <div className="mt-10">
            <Button variant="gradient" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
