import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { journeyData } from "../../lib/journy";

export default function WhatWeDo() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <SectionWrapper
      id="our-journey"
      bg="bg-charcoal-900"
      className="section-padding py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Our Journey"
        title="A journey shaped by culture, creativity & community"
        subtitle="From cultural competitions and festivals to a studio of our own — here's how Malancha grew."
      />

      <div className="relative mt-16">
        {/* edge fades to hint there's more to scroll */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-charcoal-900 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-charcoal-900 to-transparent z-20" />

        {/* scroll button — left */}
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll journey left"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-charcoal-900/80 text-charcoal-300 hover:text-white hover:border-primary/40 transition-colors duration-300"
        >
          <ChevronLeft size={20} />
        </button>

        {/* scroll button — right */}
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Scroll journey right"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-charcoal-900/80 text-charcoal-300 hover:text-white hover:border-primary/40 transition-colors duration-300"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={trackRef}
          className="overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x proximity" }}
        >
          <div
            className="relative flex items-center px-6 md:px-16"
            style={{ minWidth: "max-content" }}
          >
            {/* baseline */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-white/15" />

            {journeyData?.map((item, i) => {
              const isUp = i % 2 === 0;
              return (
                <div
                  key={item.number}
                  style={{ scrollSnapAlign: "start" }}
                  className="relative flex-shrink-0 w-[220px] md:w-[260px] flex flex-col items-center"
                >
                  {/* upper half */}
                  <div className="h-[190px] md:h-[210px] flex flex-col items-center justify-end pb-4">
                    {isUp && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4 }}
                        className="text-center px-3"
                      >
                        <h3 className="text-white font-semibold text-base mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary/70 text-xs mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-charcoal-300 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                    {isUp && (
                      <span className="mt-3 w-px h-8 bg-gradient-to-b from-transparent to-primary/60" />
                    )}
                  </div>

                  {/* node on the baseline */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-charcoal-900 border border-primary/40">
                    <span className="font-mono text-xs text-primary">
                      {item.number}
                    </span>
                  </div>

                  {/* lower half */}
                  <div className="h-[190px] md:h-[210px] flex flex-col items-center justify-start pt-4">
                    {!isUp && (
                      <span className="mb-3 w-px h-8 bg-gradient-to-t from-transparent to-primary/60" />
                    )}
                    {!isUp && (
                      <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4 }}
                        className="text-center px-3"
                      >
                        <h3 className="text-white font-semibold text-base mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary/70 text-xs mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-charcoal-300 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* mobile hint */}
        <p className="md:hidden text-center text-charcoal-400 text-xs mt-4">
          Swipe to explore the journey
        </p>
      </div>
    </SectionWrapper>
  );
}
