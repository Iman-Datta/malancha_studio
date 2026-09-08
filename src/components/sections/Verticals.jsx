import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { verticals } from "../../data/content";

export default function Verticals() {
  return (
    <SectionWrapper
      id="verticals"
      bg="bg-charcoal-800"
      className="section-padding py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Our Verticals"
        title={
          <>
            Ten Worlds of <span className="text-gradient-gold">Creativity</span>
          </>
        }
        subtitle="Every art form finds a home at Malancha — explore the diverse creative verticals we nurture."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {verticals.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -10 }}
            className="group relative glass-card p-6 flex flex-col items-center gap-4 cursor-pointer hover:border-primary/40 hover:bg-white/10 transition-colors duration-300"
          >
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />
            <div
              className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <v.icon size={26} className="text-white" />
            </div>
            <p className="relative text-center text-sm font-semibold text-charcoal-100 group-hover:text-white transition-colors">
              {v.name}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
