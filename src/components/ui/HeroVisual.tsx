import { motion } from "framer-motion";

const techIcons = [
  { name: "React", icon: "⚛️", delay: 0 },
  { name: "AI", icon: "🤖", delay: 0.5 },
  { name: "Cloud", icon: "☁️", delay: 1 },
  { name: "Data", icon: "📊", delay: 1.5 },
  { name: "Mobile", icon: "📱", delay: 2 },
  { name: "Code", icon: "💻", delay: 2.5 },
];

export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
      {/* Central glowing orb */}
      <motion.div
        className="absolute w-48 h-48 lg:w-64 lg:h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--brand-cyan) / 0.4) 0%, hsl(var(--brand-purple) / 0.2) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner ring */}
      <motion.div
        className="absolute w-40 h-40 lg:w-52 lg:h-52 rounded-full border border-brand-cyan/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting dots on inner ring */}
        {[0, 120, 240].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-brand-cyan rounded-full shadow-lg"
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
              transform: `rotate(${deg}deg) translateX(80px) translateY(-6px)`,
              boxShadow: "0 0 15px hsl(var(--brand-cyan))",
            }}
          />
        ))}
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-brand-purple/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting dots on outer ring */}
        {[45, 135, 225, 315].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-purple rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
              transform: `rotate(${deg}deg) translateX(128px) translateY(-4px)`,
              boxShadow: "0 0 10px hsl(var(--brand-purple))",
            }}
          />
        ))}
      </motion.div>

      {/* Floating tech icons */}
      {techIcons.map((tech, index) => {
        const angle = (index * 60) * (Math.PI / 180);
        const radius = 150;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={tech.name}
            className="absolute flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xl lg:text-2xl"
            style={{
              left: `calc(50% + ${x}px - 24px)`,
              top: `calc(50% + ${y}px - 24px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { delay: tech.delay, duration: 0.5 },
              scale: { delay: tech.delay, duration: 0.5 },
              y: { delay: tech.delay + 0.5, duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.2, borderColor: "hsl(var(--accent))" }}
          >
            {tech.icon}
          </motion.div>
        );
      })}

      {/* Central logo/text */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-brand-cyan via-brand-blue to-brand-purple flex items-center justify-center shadow-2xl">
          <span className="text-3xl lg:text-4xl font-heading font-bold text-white">CT</span>
        </div>
        <motion.p 
          className="mt-4 text-xs lg:text-sm text-white/50 font-mono uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Innovation Hub
        </motion.p>
      </motion.div>

      {/* Background grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--brand-cyan))" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent"
        animate={{ y: [-200, 200] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
