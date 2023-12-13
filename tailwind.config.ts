import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: {
        100: "#1c1c1c",
        200: "#f5f7fb",
      },
      purple: {
        100: "#293264",
        200: "#4d5b9e",
        300: "#d6dbf5",
        400: "#d8def0",
      },
      blue: "#dbebf9",
      yellow: "#fffacc",
      correct: "#94d7a2",
      incorrect: "#f8bcbc",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      karla: ["var(--font-karla)"],
    },
    screens: {
      // => @media (min-width: 768px) { ... }
      md: "768px",
      // => @media (min-width: 1024px) { ... }
      lg: "1024px",
      // => @media (min-width: 1440px) { ... }
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        btn: "0 4px #d8def0",
        answer: "0 2.5px #d8def0",
        input: "0 4px #d8def0",
      },
    },
  },
  plugins: [],
};
export default config;
