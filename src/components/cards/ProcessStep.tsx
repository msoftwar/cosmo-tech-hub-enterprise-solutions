import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function ProcessStep({
  number,
  title,
  description,
  isLast,
  className,
}: ProcessStepProps) {
  return (
    <div className={cn("relative", !isLast && "pb-12", className)}>
      {/* Line */}
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border" />
      )}

      <div className="flex gap-6">
        {/* Number */}
        <div className="shrink-0 w-12 h-12 rounded-full gradient-brand flex items-center justify-center text-white font-bold">
          {number}
        </div>

        {/* Content */}
        <div className="pt-1">
          <h4 className="font-heading font-bold text-xl mb-2">{title}</h4>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
