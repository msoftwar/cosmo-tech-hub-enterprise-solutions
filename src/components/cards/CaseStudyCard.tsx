import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

export function CaseStudyCard({
  title,
  client,
  description,
  image,
  technologies,
  category,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/90 text-white backdrop-blur-sm">
            {category}
          </span>
        </div>
        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="h-5 w-5 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <p className="text-accent text-sm font-medium mb-2">{client}</p>
        <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
      
      {/* Hover gradient border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/50 transition-colors pointer-events-none" />
    </motion.div>
  );
}
