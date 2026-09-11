import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import SocialIcon from "../ui/SocialIcon";
import { navLinks, contactInfo, socials } from "../../data/content";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-900 border-t border-white/10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative section-padding py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href="/"
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
              Where creativity meets culture. A collective of artists, mentors
              and dreamers building cultural legacies across India.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-charcoal-300 hover:text-primary hover:border-primary/40 transition-colors duration-300"
                >
                  <SocialIcon name={s.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Get in Touch
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-sm text-charcoal-400 hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-charcoal-400 hover:text-primary transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal-500">
            &copy; {new Date().getFullYear()} Malancha Cultural Studioz. All
            rights reserved.
          </p>

          <motion.a
            href="#"
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
