import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { stats } from "../../data/content";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const numeric = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, numeric, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const suffix = value.replace(/\d/g, "");
        setDisplay(Math.floor(v) + suffix);
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function Statistics() {
  return (
    <SectionWrapper
      id="statistics"
      bg="bg-charcoal-800"
      className="section-padding py-20 md:py-28"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 text-center hover:border-primary/40 transition-colors duration-300 group"
          >
            <stat.icon
              size={36}
              className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
              <Counter value={stat.value} />
            </p>
            <p className="text-sm text-charcoal-300 font-medium leading-snug">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
