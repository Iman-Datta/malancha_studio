import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { whyChooseUs } from "../../data/content";

export default function WhyChooseUs() {
  return (
    <SectionWrapper
      id="why-choose-us"
      bg="bg-charcoal-800"
      className="section-padding py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Why Choose Us"
        title={
          <>
            The Malancha <span className="text-gradient-gold">Advantage</span>
          </>
        }
        subtitle="We go beyond classes we build careers, communities and cultural legacies."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseUs.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative glass-card p-7 hover:border-primary/40 hover:bg-white/10 transition-colors duration-300 overflow-hidden"
          >
            <span className="absolute top-4 right-5 text-6xl font-bold text-white/5 group-hover:text-primary/10 transition-colors duration-300">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-charcoal-300 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Check size={16} />
                <span>Included</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
