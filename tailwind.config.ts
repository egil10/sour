import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFAF4",
          100: "#FBF5EA",
          200: "#F5EAD3",
          300: "#EAD8B0",
          400: "#DCC38E",
        },
        crust: {
          300: "#EABF83",
          400: "#D69A55",
          500: "#C2803B",
          600: "#A2652A",
          700: "#7E4B1E",
        },
        bark: {
          700: "#4A2E18",
          800: "#3A2412",
          900: "#26170B",
        },
        moss: {
          400: "#9CAB69",
          500: "#7A8B45",
          600: "#5F6E33",
          700: "#445125",
        },
        berry: {
          600: "#7E2F24",
          700: "#5F2018",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Trebuchet MS", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.25 0 0 0 0 0.1 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.12)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        "slide-track": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "slow-zoom": "slow-zoom 18s ease-in-out infinite alternate",
        "float-soft": "float-soft 7s ease-in-out infinite",
        "slide-track": "slide-track 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
