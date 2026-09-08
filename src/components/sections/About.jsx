import { motion } from "framer-motion";
import { Heart, Palette, Users, Sparkles } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const pillars = [
  { icon: Heart, label: "Arts" },
  { icon: Palette, label: "Culture" },
  { icon: Sparkles, label: "Talent" },
  { icon: Users, label: "Community" },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      bg="bg-charcoal-900"
      className="section-padding py-24 md:py-32"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-5"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            A Creative Force Rooted in{" "}
            <span className="text-gradient-gold">Culture</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 text-lg text-charcoal-300 leading-relaxed"
          >
            Malancha Cultural Studioz is a creative organization dedicated to
            promoting arts, culture, talent and community engagement through
            events, workshops and productions. We are a collective of
            passionate artists, mentors and dreamers committed to nurturing
            creativity at every level.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-lg text-charcoal-400 leading-relaxed"
          >
            From intimate studio sessions to grand cultural festivals, we
            provide platforms where tradition meets innovation and where
            every voice finds its stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {pillars.map((p) => (
              <div
                key={p.label}
                className="glass-card flex flex-col items-center gap-3 p-5 hover:border-primary/40 transition-colors duration-300"
              >
                <p.icon size={28} className="text-primary" />
                <span className="text-sm font-semibold text-charcoal-200">
                  {p.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
            <img
              src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cultural art workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass-card p-5 max-w-[200px] hidden md:block"
          >
            <p className="text-3xl font-bold text-gradient-gold">10+</p>
            <p className="text-sm text-charcoal-300 mt-1">
              Cultural verticals under one roof
            </p>
          </motion.div>

          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-primary/20 hidden md:block" />
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-secondary/20 hidden md:block" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
