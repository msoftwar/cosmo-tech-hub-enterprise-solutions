import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FadeInUp, GlowOrb, FloatingElement } from "@/components/ui/motion";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Sparkles, 
  Globe2, 
  Heart, 
  Zap, 
  Coffee,
  ArrowRight,
  Mail
} from "lucide-react";

const perks = [
  { icon: Globe2, label: "Remote-First Culture" },
  { icon: Zap, label: "Cutting-Edge Projects" },
  { icon: Heart, label: "Health & Wellness" },
  { icon: Coffee, label: "Flexible Hours" },
];

export default function Careers() {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark">
        <StarfieldBackground />
        
        {/* Animated Glow Orbs */}
        <GlowOrb color="purple" size="xl" className="-top-20 -right-20 opacity-40" />
        <GlowOrb color="cyan" size="xl" className="-bottom-40 -left-40 opacity-30" />
        <GlowOrb color="accent" size="lg" className="top-1/2 right-1/4 opacity-20" />
        
        {/* Floating Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement duration={8} className="absolute top-1/4 left-[15%]">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center backdrop-blur-sm">
              <Rocket className="h-8 w-8 text-accent" />
            </div>
          </FloatingElement>
          <FloatingElement duration={10} className="absolute top-1/3 right-[20%]">
            <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="h-7 w-7 text-brand-purple" />
            </div>
          </FloatingElement>
          <FloatingElement duration={7} className="absolute bottom-1/3 left-[25%]">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center backdrop-blur-sm">
              <Globe2 className="h-6 w-6 text-brand-cyan" />
            </div>
          </FloatingElement>
          <FloatingElement duration={9} className="absolute bottom-1/4 right-[15%]">
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center backdrop-blur-sm">
              <Zap className="h-7 w-7 text-brand-red" />
            </div>
          </FloatingElement>
        </div>
        
        <div className="container-wide relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-brand-purple/20 border border-accent/30 mb-8"
              >
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-lg font-medium text-surface-dark-foreground">We're Growing Our Team</span>
                <Sparkles className="h-5 w-5 text-brand-purple" />
              </motion.div>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-surface-dark-foreground leading-tight">
                Build the Future
                <br />
                <span className="gradient-brand-text">With Us</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <p className="mt-8 text-xl md:text-2xl text-surface-dark-foreground/70 leading-relaxed max-w-2xl mx-auto">
                We're on a mission to transform how businesses leverage technology. 
                Join our team of passionate innovators and make an impact.
              </p>
            </FadeInUp>
            
            {/* Perks */}
            <FadeInUp delay={0.3}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                {perks.map((perk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <perk.icon className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-surface-dark-foreground/80">{perk.label}</span>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
            
            {/* Coming Soon Card */}
            <FadeInUp delay={0.5}>
              <div className="mt-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-brand-purple to-brand-cyan blur-xl opacity-20 rounded-3xl" />
                <div className="relative bg-surface-dark/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
                  <div className="w-20 h-20 mx-auto rounded-2xl gradient-brand flex items-center justify-center mb-6">
                    <Rocket className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-surface-dark-foreground">
                    Exciting Opportunities Coming Soon
                  </h2>
                  <p className="mt-4 text-lg text-surface-dark-foreground/70 max-w-xl mx-auto">
                    We're preparing to open new positions. Drop us your email to be the first to know 
                    when we start hiring for your dream role.
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="gradient" size="xl" asChild>
                      <Link to="/contact">
                        <Mail className="h-5 w-5 mr-2" />
                        Get Notified
                      </Link>
                    </Button>
                    <Button variant="outline" size="xl" asChild className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                      <Link to="/about">
                        Learn About Us
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeInUp>
            
            {/* Fun Stats */}
            <FadeInUp delay={0.6}>
              <div className="mt-16 grid grid-cols-3 gap-8">
                {[
                  { value: "4.9★", label: "Glassdoor Rating" },
                  { value: "100%", label: "Remote Friendly" },
                  { value: "∞", label: "Learning Budget" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-heading font-bold gradient-brand-text">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm text-surface-dark-foreground/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </Layout>
  );
}
