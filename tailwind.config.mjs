/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-grey": "#1a1a1b",
        "text-cream": "#f5f5dc",
        "accent-amber": "#ffbf00",
        // Additional vintage shades
        vintage: {
          dark: "#0d0d0d",
          grey: "#2a2a2b",
          "grey-light": "#3a3a3b",
          cream: "#f5f5dc",
          "cream-dark": "#e5e5cc",
          amber: "#ffbf00",
          "amber-light": "#ffd700",
          "amber-dark": "#cc9900",
        },
      },
      fontFamily: {
        slab: ['"Roboto Slab"', "serif"],
        sans: [
          "Inter",
          '"Geist Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "rotate-slow": "rotate 20s linear infinite",
        "pulse-amber": "pulse-amber 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #ffbf00, 0 0 10px #ffbf00" },
          "100%": {
            boxShadow: "0 0 10px #ffbf00, 0 0 20px #ffbf00, 0 0 30px #ffbf00",
          },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-amber": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      boxShadow: {
        "amber-glow": "0 0 20px rgba(255, 191, 0, 0.3)",
        "amber-glow-lg": "0 0 30px rgba(255, 191, 0, 0.5)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
