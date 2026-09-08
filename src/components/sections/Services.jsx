import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/content";

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      bg="bg-white"
      className="section-padding py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Our Services"
        title={
          <>
            What We <span className="text-secondary-500">Offer</span>
          </>
        }
        subtitle="Professional classes, studio services and creative solutions — tailored for every artist's journey."
        light
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-2xl p-7 border border-charcoal-100 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <s.icon size={30} className="text-white" />
              </div>
              <ArrowUpRight
                size={24}
                className="text-charcoal-300 group-hover:text-secondary-500 group-hover:rotate-45 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-charcoal-800 mb-2 group-hover:text-secondary-500 transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-charcoal-500 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
