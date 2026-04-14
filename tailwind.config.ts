import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F8F8",
        "cream-dark": "#ECECEC",
        ink: "#0D0D0D",
        forest: "#111111",
        "forest-light": "#222222",
        brass: "#C8102E",
        "brass-light": "#E8213E",
        "warm-gray": "#777777",
        stitch: "#CCCCCC",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["11px", { letterSpacing: "0.25em", fontWeight: "600" }],
        btn: ["11px", { letterSpacing: "0.14em", fontWeight: "700" }],
      },
      maxWidth: {
        container: "1300px",
      },
      screens: {
        "2xl": "1300px",
        xl: "1100px",
        lg: "900px",
        md: "600px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        cpulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        cpulse: "cpulse 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
