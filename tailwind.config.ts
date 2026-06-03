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
        ink: "#121212",
        graphite: "#1D1D1B",
        paper: "#F7F5EF",
        porcelain: "#FDFDFB",
        amethyst: "#4B0082",
        amber: "#FFBF00",
        moss: "#6E7D56",
        clay: "#B66B48",
        boundary: "#D8D3C7",
        muted: "#5F5A52",
        "soft-ink": "#2A2A28"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        polish: "0 28px 80px rgba(18, 18, 18, 0.08)",
        technical: "0 2px 4px rgba(18, 18, 18, 0.03), 0 1px 2px rgba(18, 18, 18, 0.02)"
      }
    }
  },
  plugins: []
};

export default config;
