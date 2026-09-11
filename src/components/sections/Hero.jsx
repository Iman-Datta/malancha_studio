import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900">
      {/* Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[120px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </motion.div>

      {/* Floating particles */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary blur-[2px]"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-16 w-4 h-4 rounded-full bg-secondary blur-[2px]"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary blur-[1px]"
      />

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 section-padding text-center max-w-5xl mx-auto pt-20"
      >
        {/* Actual Logo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-center mb-7"
        >
          <img
            src="/LogoHeader.png"
            alt="Malancha Logo"
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />
        </motion.div>

        {/* Bengali Brand Name */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="flex justify-center"
        >
          <img
            src="/BrandName.png"
            alt="মালঞ্চ"
            className="w-auto h-24 md:h-28 lg:h-32 object-contain"
          />
        </motion.div>

        {/* MALANCHA CULTURAL STUDIOZ */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            mt-4
            text-center
            font-serif
            font-bold
            uppercase
            leading-[0.78]
          "
        >
          {/* MALANCHA */}
          <div
            className="
              text-white
              text-5xl
              md:text-6xl
              lg:text-7xl
              tracking-tight
            "
          >
            MALANCHA
          </div>

          {/* CULTURAL */}
          <div
            className="
              text-yellow-400
              text-5xl
              md:text-6xl
              lg:text-7xl
              tracking-tight
            "
          >
            CULTURAL
          </div>

          {/* STUDIOZ */}
          <div
            className="
              text-yellow-400
              text-5xl
              md:text-6xl
              lg:text-7xl
              tracking-tight
            "
          >
            STUDIOZ
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="
            mt-6
            text-xl
            md:text-2xl
            text-charcoal-200
            font-light
            italic
            font-display
          "
        >
          Where Creativity Meets Culture.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="
            mt-12
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
          "
        >
          {/* Explore Activities */}
          <a href="#verticals" className="btn-primary group">
            Explore Activities
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          {/* Become a Member */}
          <a href="#contact" className="btn-secondary">
            Become a Member
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-10
        "
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            w-6
            h-10
            rounded-full
            border-2
            border-charcoal-400
            flex
            items-start
            justify-center
            p-1.5
          "
        >
          <div
            className="
              w-1
              h-2
              rounded-full
              bg-primary
            "
          />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-charcoal-900
          to-transparent
          z-[5]
        "
      />
    </section>
  );
}
