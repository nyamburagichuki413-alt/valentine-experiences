import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        roseBg: "#0e0611",
        roseDeep: "#f40f68",
        roseSoft: "#ff7aa2",
        roseGlow: "#ff2a83"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.03)" },
          "100%": { transform: "translateY(0) scale(1)" }
        },
        drift: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-120vh) translateX(var(--drift-x))" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift var(--drift-dur,12s) linear infinite"
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 42, 131, 0.6)"
      }
    }
  },
  plugins: []
};
export default config;