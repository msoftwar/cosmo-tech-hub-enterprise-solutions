import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Motion components
interface MotionDivProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function MotionDiv({ className, ...props }: MotionDivProps) {
  return <motion.div className={cn(className)} {...props} />;
}

export function FadeInUp({ 
  children, 
  className, 
  delay = 0,
  ...props 
}: MotionDivProps & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ 
  children, 
  className, 
  delay = 0,
  ...props 
}: MotionDivProps & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={scaleIn}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ 
  children, 
  className, 
  ...props 
}: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children, 
  className, 
  ...props 
}: MotionDivProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Hover card wrapper
export function HoverScale({ 
  children, 
  className,
  scale = 1.02,
  ...props 
}: MotionDivProps & { scale?: number }) {
  return (
    <motion.div
      whileHover={{ scale, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Floating animation
export function FloatingElement({ 
  children, 
  className,
  duration = 6,
  ...props 
}: MotionDivProps & { duration?: number }) {
  return (
    <motion.div
      animate={{ 
        y: [0, -15, 0],
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Gradient text animation
export function AnimatedGradientText({ 
  children, 
  className,
  ...props 
}: MotionDivProps) {
  return (
    <motion.span
      className={cn(
        "bg-gradient-to-r from-brand-red via-brand-purple to-brand-blue bg-[length:200%_auto] bg-clip-text text-transparent",
        className
      )}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      {...props}
    >
      {children}
    </motion.span>
  );
}

// Particle/glow effect
export function GlowOrb({ 
  className,
  color = "accent",
  size = "lg"
}: { 
  className?: string;
  color?: "accent" | "purple" | "blue" | "red";
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]"
  };
  
  const colorClasses = {
    accent: "bg-accent/30",
    purple: "bg-brand-purple/30",
    blue: "bg-brand-blue/30",
    red: "bg-brand-red/30"
  };
  
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

// Counter animation
export function AnimatedCounter({ 
  value, 
  suffix = "",
  className 
}: { 
  value: number;
  suffix?: string;
  className?: string;
}) {
  return (
    <motion.span
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {value}{suffix}
      </motion.span>
    </motion.span>
  );
}

export { motion };
