import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

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

const offices = [
  {
    name: "Head Office - Dubai",
    address: "District 12, Jumeirah Village Circle, Dubai, United Arab Emirates",
    phone: "+971 56 994 9346",
  },
  {
    name: "UK Office",
    address: "19 Farrow Avenue, Hampton Vale, PE7 8HT, England, UK",
    phone: "+44 7519 302088",
  },
  {
    name: "Pakistan Office",
    address: "Abbasi Business Center, Rawalpindi",
    phone: "+92 313 770 7190",
  },
];

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={logoWhite}
                alt="Cosmo Tech Hub"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 text-sm text-surface-dark-foreground/70 max-w-sm leading-relaxed">
              Building scalable digital solutions for businesses worldwide.
              From web applications to AI-powered systems, we deliver
              enterprise-grade technology.
            </p>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/107896642"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
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
                    className="text-sm text-surface-dark-foreground/70 hover:text-white transition-colors"
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
                    className="text-sm text-surface-dark-foreground/70 hover:text-white transition-colors"
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
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-surface-dark-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@cosmotechhub.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-surface-dark-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+971569949346" className="hover:text-white transition-colors">
                  +971 56 994 9346
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6">
            Our Offices
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.name} className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-1 text-accent" />
                <div>
                  <p className="text-sm font-medium text-surface-dark-foreground mb-1">
                    {office.name}
                  </p>
                  <p className="text-xs text-surface-dark-foreground/60 leading-relaxed">
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-xs text-surface-dark-foreground/60 hover:text-white transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-surface-dark-foreground/60">
              © {new Date().getFullYear()} Cosmo Tech Hub. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-surface-dark-foreground/60">
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
