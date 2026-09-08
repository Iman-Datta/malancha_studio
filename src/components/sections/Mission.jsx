import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function Mission() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);

  return (
    <section
      ref={ref}
      id="mission"
      className="relative py-32 md:py-40 overflow-hidden bg-charcoal-900"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Cultural performance"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/80 to-charcoal-900" />
      </motion.div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/15 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/15 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 section-padding text-center max-w-4xl mx-auto"
      >
        <Quote size={48} className="text-primary mx-auto mb-8 opacity-80" />

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          "To preserve <span className="text-gradient-gold">culture</span>,
          nurture <span className="text-gradient-gold">talent</span> and
          inspire <span className="text-gradient-gold">creativity</span>."
        </h2>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Our Mission
        </p>
      </motion.div>
    </section>
  );
}
