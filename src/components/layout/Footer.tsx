import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "AI Solutions", href: "/services" },
  ],
  resources: [
    { name: "Technologies", href: "/technologies" },
    { name: "Case Studies", href: "#" },
    { name: "Blog", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src={logoFull}
                alt="Cosmo Tech Hub"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-surface-dark-foreground/70 max-w-sm leading-relaxed">
              Building scalable digital solutions for businesses worldwide.
              From web applications to AI-powered systems, we deliver
              enterprise-grade technology.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-surface-dark-foreground/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-surface-dark-foreground/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-surface-dark-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@cosmotechhub.com</span>
              </li>
              <li className="flex items-center gap-3 text-surface-dark-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-surface-dark-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 mt-1" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-surface-dark-foreground/60">
              © {new Date().getFullYear()} Cosmo Tech Hub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-surface-dark-foreground/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
