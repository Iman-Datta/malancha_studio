import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { whatWeDo } from "../../data/content";

export default function WhatWeDo() {
  return (
    <SectionWrapper
      id="what-we-do"
      bg="bg-charcoal-900"
      className="section-padding py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="What We Do"
        title={
          <>
            Crafting <span className="text-gradient-gold">Experiences</span>
          </>
        }
        subtitle="From workshops to festivals, studio recordings to short films — we bring creative visions to life."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whatWeDo.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8 }}
            className="group glass-card p-7 hover:border-primary/40 hover:bg-white/10 transition-colors duration-300"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <item.icon size={26} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
