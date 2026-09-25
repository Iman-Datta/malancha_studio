import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import SocialIcon from "../ui/SocialIcon";
import { navLinks, contactInfo, socials } from "../../data/content";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-charcoal-900 border-t border-white/10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative section-padding py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* 1. Brand Section (4 cols on large screens) */}
          <div className="lg:col-span-4 flex flex-col">
            <a
              href="#"
              className="inline-flex items-center gap-3"
              aria-label="Malancha Cultural Studioz"
            >
              <img
                src="/LogoHeader.png"
                alt="Malancha Logo"
                className="w-12 h-12 object-contain"
              />
              <img
                src="/BrandName.png"
                alt="Malancha Cultural Studioz"
                className="h-11 w-auto object-contain"
              />
            </a>

            <p className="mt-5 text-sm text-charcoal-400 leading-relaxed max-w-xs">
              Where creativity meets culture. A collective of artists, mentors,
              and dreamers building cultural legacies across India.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-charcoal-300 hover:text-primary hover:border-primary/40 transition-colors duration-300"
                >
                  <SocialIcon name={s.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links Section (Split into 2 Columns / 3 cols on large) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>

            {/* 2-Column Sub-grid for Nav Items */}
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-wider font-medium text-charcoal-400 hover:text-primary transition-colors duration-300 inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info Section (2 cols on large) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Get in Touch
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-charcoal-400 leading-relaxed">
                  {contactInfo.address ||
                    "Nischinda Paschim Para, Bally, Howrah (Between Bally Halt & Rajchandrapur)"}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {contactInfo.phone && (
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="text-xs text-charcoal-400 hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  )}
                  <a
                    href="tel:+917980447349"
                    className="text-xs text-charcoal-400 hover:text-primary transition-colors"
                  >
                    +91 79804 47349
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs text-charcoal-400 hover:text-primary transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Map Section (3 cols on large) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Find Us
            </h4>
            <div className="relative w-full h-36 rounded-xl overflow-hidden border border-white/10 bg-charcoal-800 shadow-md group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d920.5301640186763!2d88.32598314275876!3d22.649289614735512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM4JzU3LjciTiA4OMKwMTknMzQuNCJF!5e0!3m2!1sen!2sin!4v1789588056729!5m2!1sen!2sin"
                className="w-full h-full border-0 filter opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Malancha Cultural Studioz Map Location"
              />
            </div>
            <a
              href="https://maps.google.com/?q=22.649289614735512,88.32598314275876"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs text-charcoal-400 hover:text-primary flex items-center gap-1 self-start transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Malancha Cultural Studioz. All
            rights reserved.
          </p>

          <motion.a
            href="#"
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-charcoal-800 transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
