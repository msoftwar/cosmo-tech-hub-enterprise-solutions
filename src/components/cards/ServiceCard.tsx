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
    <div className={cn("service-card group", className)}>
      <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-title mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="mt-6 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
