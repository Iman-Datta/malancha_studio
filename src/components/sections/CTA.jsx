import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="join"
      className="relative py-24 md:py-32 section-padding overflow-hidden bg-charcoal-900"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/40 via-charcoal-900 to-primary-900/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-5">
          Join the Movement
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Become a part of the{" "}
          <span className="text-gradient-gold">
            Malancha cultural Studioz family
          </span>
        </h2>

        <p className="mt-6 text-lg text-charcoal-300 leading-relaxed">
          Whether you're an artist, a learner or a culture enthusiast — there's
          a place for you here. Let's create something extraordinary together.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary group">
            Join Us
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={18} />
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
