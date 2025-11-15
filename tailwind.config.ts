import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#45C1A1",
        secondary: "#1B1D1F",
        accent: "#A9B5C9",
        light: "#F4F7F8",
        ai: "#4AA8FF",
      },
      fontFamily: {
        sans: ["Inter", "'HarmonyOS Sans SC'", "'PingFang SC'", "system-ui", "sans-serif"],
        display: ["Inter", "'Alibaba PuHuiTi'", "'SF Pro Display'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at center, rgba(69,193,161,0.35), rgba(27,29,31,0.95))",
        "gradient-ai": "radial-gradient(circle at 20% 20%, rgba(74,168,255,0.45), transparent 60%), radial-gradient(circle at 80% 0%, rgba(69,193,161,0.35), transparent 55%), linear-gradient(135deg, #0a1114, #101418)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(74, 168, 255, 0.25)",
        panel: "0 20px 50px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
