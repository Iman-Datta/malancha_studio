import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { galleryImages } from "../../data/content";

// Grid configuration to keep layout consistent
const GRID_CONFIG = [
  { span: "row-span-2" },
  { span: "" },
  { span: "" },
  { span: "row-span-2" },
  { span: "" },
  { span: "" },
  { span: "" },
  { span: "" },
];

export default function Gallery() {
  // Array of 8 indices pointing into galleryImages
  const [currentIndices, setCurrentIndices] = useState(
    GRID_CONFIG.map((_, i) => i % galleryImages.length),
  );

  useEffect(() => {
    if (galleryImages.length <= 8) return;

    // Automatically slide/swap images every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndices((prevIndices) =>
        prevIndices.map((prevIndex, slotIndex) => {
          // Increment image index by 8 (or loop around total images)
          return (prevIndex + 8) % galleryImages.length;
        }),
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
        {GRID_CONFIG.map((slot, slotIndex) => {
          const imgIndex = currentIndices[slotIndex];
          const img = galleryImages[imgIndex] || galleryImages[0];

          return (
            <div
              key={slotIndex}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-charcoal-800 ${slot.span}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-semibold">
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
