import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        primary: "#3EB489",
        secondary: "#2A2D33",
        accent: "#AEB7C4",
        ai: "#4AA8FF",
        earth: "#D9CBB8",
        soft: "#F5F7FA",
      },
      fontFamily: {
        sans: ["Inter", "'HarmonyOS Sans SC'", "'PingFang SC'", "system-ui", "sans-serif"],
        display: ["'SF Pro Display'", "Inter", "'Alibaba PuHuiTi'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(42, 45, 51, 0.08)",
        subtle: "0 10px 30px rgba(174, 183, 196, 0.25)",
      },
      borderRadius: {
        large: "2.5rem",
      },
      backgroundImage: {
        "hero-accent":
          "radial-gradient(circle at top right, rgba(74, 168, 255, 0.18), transparent 55%), radial-gradient(circle at bottom left, rgba(62, 180, 137, 0.22), transparent 60%)",
        "divider-fade":
          "linear-gradient(to right, rgba(62, 180, 137, 0), rgba(62, 180, 137, 0.45), rgba(62, 180, 137, 0))",
      },
    },
  },
  plugins: [],
};

export default config;
