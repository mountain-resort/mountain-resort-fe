import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#FBFBF8",
          black: "#0E131E",
          gold: "#EEB609",
        },
        secondary: {
          dark_grey: "#3F4547",
          light_grey: "#525252",
        },
      },
      fontFamily: {
        lora: ['var(--lora)'],
        sans: ['var(--open_sans)'],
      },
      fontSize: {
        xl: ["72px",  { lineHeight: "92px" }],
        "2lg": ["48px", { lineHeight: "61.4px" }],
        lg: ["32px", { lineHeight: "41px" }],
        md: ["24px", { lineHeight: "30.7px" }],
        sm: ["18px", { lineHeight: "23px" }],
        xs: ["16px", { lineHeight: "20px" }],
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
        regular: "400",
      },
      screens: {
        mobile: "375px",
        pc: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;