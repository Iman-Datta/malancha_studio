/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F4C300",
          50: "#FEF9E7",
          100: "#FDF3C2",
          200: "#FBE78B",
          300: "#F9D94A",
          400: "#F4C300",
          500: "#E0AE00",
          600: "#B88F00",
          700: "#8F6E00",
          800: "#664E00",
          900: "#3D2F00",
        },
        secondary: {
          DEFAULT: "#B91C1C",
          50: "#FEE7E7",
          100: "#FCD5D5",
          200: "#F8A8A8",
          300: "#F37A7A",
          400: "#E64D4D",
          500: "#B91C1C",
          600: "#991717",
          700: "#7A1212",
          800: "#5C0E0E",
          900: "#3D0909",
        },
        charcoal: {
          DEFAULT: "#111827",
          50: "#F3F4F6",
          100: "#E5E7EB",
          200: "#D1D5DB",
          300: "#9CA3AF",
          400: "#6B7280",
          500: "#4B5563",
          600: "#374151",
          700: "#1F2937",
          800: "#111827",
          900: "#030712",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(244,195,0,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(244,195,0,0.6)" },
        },
      },
      backgroundImage: {
        "radial-gold":
          "radial-gradient(circle at 50% 50%, rgba(244,195,0,0.15) 0%, transparent 60%)",
        "radial-red":
          "radial-gradient(circle at 50% 50%, rgba(185,28,28,0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
