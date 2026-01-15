import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export function TeamMemberCard({
  name,
  role,
  image,
  bio,
  linkedin,
  twitter,
  email,
}: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/0 via-accent/0 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="relative p-6">
        <h3 className="font-heading font-bold text-lg text-foreground">{name}</h3>
        <p className="text-accent font-medium text-sm mt-1">{role}</p>
        <p className="text-muted-foreground text-sm mt-3 line-clamp-3">{bio}</p>
        
        {/* Social Links */}
        <div className="flex items-center gap-3 mt-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
