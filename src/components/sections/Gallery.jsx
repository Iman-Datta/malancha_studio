import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { galleryImages } from "../../data/content";

export default function Gallery() {
  return (
    <SectionWrapper
      id="gallery"
      bg="bg-charcoal-900"
      className="section-padding py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Gallery"
        title={
          <>
            Moments in <span className="text-gradient-gold">Motion</span>
          </>
        }
        subtitle="A glimpse into the vibrant world of Malancha — performances, workshops and cultural celebrations."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-sm font-semibold">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
