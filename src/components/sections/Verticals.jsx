import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { verticals } from "../../data/content";

// High-quality stock images corresponding to cultural art forms
const verticalImages = [
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80", // Music / Stage
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80", // Dance / Performance
  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80", // Fine Arts / Painting
  "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80", // Drama / Theatre
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80", // Vocal / Singing
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80", // Events / Festivals
  "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80", // Audio / Recording
  "https://images.pexels.com/photos/10164658/pexels-photo-10164658.jpeg?auto=format&fit=crop&w=600&q=80", // Craft / Workshop
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80", // Community Gathering
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80", // Live Show / Lights
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Verticals() {
  return (
    <SectionWrapper
      id="verticals"
      bg="bg-charcoal-800"
      className="section-padding py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <SectionHeading
        eyebrow="Our Verticals"
        title={
          <>
            Ten Worlds of <span className="text-gradient-gold">Creativity</span>
          </>
        }
        subtitle="Every art form finds a home at Malancha explore the diverse creative verticals we nurture."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10"
      >
        {verticals.map((v, i) => {
          // Priority: v.image from data file -> fall back to web URL array -> placeholder
          const imageUrl = v.image || verticalImages[i % verticalImages.length];

          return (
            <motion.div
              key={v.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative h-64 rounded-3xl overflow-hidden glass-card cursor-pointer flex flex-col justify-between p-5 border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={imageUrl}
                  alt={v.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/60 to-charcoal-900/20 group-hover:via-charcoal-900/40 transition-colors duration-500" />
              </div>

              {/* Color Tint Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay z-0`}
              />

              {/* Card Header: Icon & Number Badge */}
              <div className="relative z-10 flex justify-between items-start">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${v.color} p-0.5 shadow-lg flex items-center justify-center`}
                >
                  <div className="w-full h-full rounded-[14px] bg-charcoal-900/80 backdrop-blur-md flex items-center justify-center">
                    <v.icon
                      size={20}
                      className="text-white group-hover:text-primary transition-colors duration-300"
                    />
                  </div>
                </motion.div>

                <span className="text-xs font-mono font-bold text-white/50 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Card Footer: Title & Underline */}
              <div className="relative z-10">
                <h3 className="text-base font-bold text-white group-hover:text-gradient-gold transition-colors duration-300 leading-tight">
                  {v.name}
                </h3>

                <div className="mt-2.5 w-7 h-1 rounded-full bg-primary/40 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
