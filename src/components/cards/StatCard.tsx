import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl lg:text-5xl font-heading font-bold gradient-brand-text">
        {value}
      </div>
      <p className="mt-2 text-muted-foreground">{label}</p>
    </div>
  );
}
