import { cn } from "@/lib/utils";

interface TechCardProps {
  name: string;
  logo: string;
  category?: string;
  className?: string;
}

export function TechCard({ name, logo, category, className }: TechCardProps) {
  return (
    <div className={cn("tech-card group text-center", className)}>
      <div className="h-16 flex items-center justify-center mb-4">
        <img
          src={logo}
          alt={name}
          className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h4 className="font-semibold text-foreground">{name}</h4>
      {category && (
        <p className="text-sm text-muted-foreground mt-1">{category}</p>
      )}
    </div>
  );
}
