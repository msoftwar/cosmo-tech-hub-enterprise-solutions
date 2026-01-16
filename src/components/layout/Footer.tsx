import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Globe, Smartphone, Bot, Code2, BarChart3, Database, Clock, Shield, Zap, Twitter, Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "#" },
  ],
  services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "AI Solutions", href: "/services" },
    { name: "Data Analytics", href: "/services" },
    { name: "Data Engineering", href: "/services" },
    { name: "Custom Software", href: "/services" },
  ],
  technologies: [
    { name: "React & Angular", href: "/technologies" },
    { name: "Node.js & Python", href: "/technologies" },
    { name: "Cloud Services", href: "/technologies" },
    { name: "Database Solutions", href: "/technologies" },
    { name: "AI & Machine Learning", href: "/technologies" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Support", href: "/contact" },
  ],
};

const offices = [
  {
    name: "Head Office - Dubai",
    address: "District 12, Jumeirah Village Circle, Dubai, United Arab Emirates",
    phone: "+971 56 994 9346",
  },
  {
    name: "UK Office",
    address: "19 Farrow Avenue, Hampton Vale, Peterborough, PE7 8HT, England, UK",
    phone: "+44 7519 302088",
  },
  {
    name: "Pakistan Office",
    address: "Islamabad, Pakistan",
    phone: "+92 313 770 7190",
  },
];

const services = [
  { icon: Globe, name: "Web Development" },
  { icon: Smartphone, name: "Mobile Apps" },
  { icon: Bot, name: "AI Solutions" },
  { icon: BarChart3, name: "Data Analytics" },
  { icon: Database, name: "Data Engineering" },
  { icon: Code2, name: "Custom Software" },
];

const features = [
  { icon: Clock, text: "10+ Years Experience" },
  { icon: Shield, text: "Enterprise Security" },
  { icon: Zap, text: "Fast Delivery" },
];

export function Footer() {
  return (
    <footer className="section-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      
      {/* Newsletter / CTA Section */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-16 pt-16 pb-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <a href="tel:+971569949346">
                <Phone className="h-4 w-4" />
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column - Spans 2 cols */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src={logoWhite}
                alt="Cosmo Tech Hub"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 text-sm text-white/70 max-w-sm leading-relaxed">
              Building scalable digital solutions for businesses worldwide.
              From web applications to AI-powered systems, we deliver
              enterprise-grade technology that drives growth.
            </p>
            
            {/* Features badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                  <feature.icon className="h-3 w-3 text-accent" />
                  {feature.text}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/107896642"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <span
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 opacity-50 cursor-default"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </span>
              <span
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 opacity-50 cursor-default"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </span>
              <span
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 opacity-50 cursor-default"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-white">
              Technologies
            </h4>
            <ul className="space-y-3">
              {footerLinks.technologies.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@cosmotechhub.com" className="flex items-start gap-3 text-sm text-white/60 hover:text-accent transition-colors group">
                  <Mail className="h-4 w-4 shrink-0 mt-0.5 group-hover:text-accent" />
                  <span>contact@cosmotechhub.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+971569949346" className="flex items-start gap-3 text-sm text-white/60 hover:text-accent transition-colors group">
                  <Phone className="h-4 w-4 shrink-0 mt-0.5 group-hover:text-accent" />
                  <span>+971 56 994 9346</span>
                </a>
              </li>
              <li>
                <a href="tel:+447519302088" className="flex items-start gap-3 text-sm text-white/60 hover:text-accent transition-colors group">
                  <Phone className="h-4 w-4 shrink-0 mt-0.5 group-hover:text-accent" />
                  <span>+44 7519 302088</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-8 border-t border-white/10">
        <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-white">
          Our Global Offices
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div key={office.name} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-1">
                  {office.name}
                </p>
                <p className="text-xs text-white/50 leading-relaxed mb-2">
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="text-xs text-accent hover:text-accent/80 transition-colors"
                >
                  {office.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Icons Row */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-8 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to="/services"
              className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors group"
            >
              <service.icon className="h-4 w-4 group-hover:text-accent" />
              <span className="text-xs font-medium">{service.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-6 border-t border-white/10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Cosmo Tech Hub. All rights reserved. | Building the future of technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}