import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className, dark, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        dark ? "section-dark" : "section-light",
        className
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-headline">{title}</h2>
      {description && (
        <p className="mt-4 text-subtitle">{description}</p>
      )}
    </div>
  );
}
