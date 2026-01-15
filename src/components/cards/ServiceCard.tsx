import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-6 shadow-lg shadow-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
        {features && features.length > 0 && (
          <ul className="mt-6 space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
