import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { contactInfo } from "../../data/content";

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      bg="bg-charcoal-800"
      className="section-padding py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let's <span className="text-gradient-gold">Connect</span>
          </>
        }
        subtitle="Have a question, want to join or collaborate? We'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-5">
          <motion.a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 6 }}
            className="glass-card p-6 flex items-center gap-5 hover:border-primary/40 transition-colors duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone size={24} className="text-charcoal-800" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-1">
                Call Us
              </p>
              <p className="text-lg font-semibold text-white">
                {contactInfo.phone}
              </p>
            </div>
          </motion.a>

          <motion.a
            href={`mailto:${contactInfo.email}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ x: 6 }}
            className="glass-card p-6 flex items-center gap-5 hover:border-primary/40 transition-colors duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-1">
                Email Us
              </p>
              <p className="text-base font-semibold text-white break-all">
                {contactInfo.email}
              </p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center shadow-lg">
              <MapPin size={24} className="text-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-1">
                Location
              </p>
              <p className="text-lg font-semibold text-white">Across India</p>
            </div>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="glass-card p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-charcoal-300 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-charcoal-900/50 border border-white/10 text-white placeholder-charcoal-500 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-charcoal-900/50 border border-white/10 text-white placeholder-charcoal-500 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal-300 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us what you're interested in..."
              className="w-full px-4 py-3 rounded-xl bg-charcoal-900/50 border border-white/10 text-white placeholder-charcoal-500 focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full group">
            Send Message
            <Send
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
