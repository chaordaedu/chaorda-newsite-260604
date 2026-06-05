import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        graphite: "#141414",
        paper: "#F7F5EF",
        porcelain: "#FDFDFB",
        amethyst: "#4B0082",
        amber: "#FFBF00",
        moss: "#6E7D56",
        clay: "#B66B48",
        boundary: "rgba(255, 255, 255, 0.1)",
        muted: "rgba(255, 255, 255, 0.6)",
        "soft-ink": "#1A1A1A"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        polish: "0 28px 80px rgba(0, 0, 0, 0.4)",
        glow: "0 0 20px rgba(255, 191, 0, 0.15)",
        technical: "0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)"
      }
    }
  },
  plugins: []
};

export default config;
