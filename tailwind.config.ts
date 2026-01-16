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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Morocco-inspired calm palette
        terracotta: {
          50: "#fdf6f3",
          100: "#faeae4",
          200: "#f5d5c8",
          300: "#edb9a3",
          400: "#e29474",
          500: "#d6754f",
          600: "#c75f3a",
          700: "#a64c30",
          800: "#88402c",
          900: "#6f3828",
        },
        sand: {
          50: "#faf9f6",
          100: "#f4f1ea",
          200: "#e8e2d3",
          300: "#d9cfb8",
          400: "#c7b795",
          500: "#b9a47a",
          600: "#ab906a",
          700: "#8f7659",
          800: "#75614c",
          900: "#604f40",
        },
        atlas: {
          50: "#f0f5f9",
          100: "#dae6f0",
          200: "#b9cfe4",
          300: "#8bb0d2",
          400: "#568bba",
          500: "#3c6fa0",
          600: "#305987",
          700: "#2a486d",
          800: "#273e5b",
          900: "#25364d",
          950: "#1a2533",
        },
        olive: {
          50: "#f6f7f4",
          100: "#e9ebe4",
          200: "#d4d8ca",
          300: "#b6bda8",
          400: "#969f85",
          500: "#7a8568",
          600: "#606a51",
          700: "#4c5442",
          800: "#404538",
          900: "#373b30",
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
