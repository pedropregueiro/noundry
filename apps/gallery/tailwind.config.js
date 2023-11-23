const { nextui } = require("@nextui-org/react");
const containerQueries = require("@tailwindcss/container-queries");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pix: ["Pix", "sans-serif"],
        Inter: ["Inter Variable", "sans-serif"],
        Lora: ["Lora Variable", "sans-serif"],
      },
      colors: {
        cool: "#d5d7e1",
        warm: "#e1d7d5",
        primary: {
          DEFAULT: "#ff2165",
          100: "#ffd3e0",
          200: "#ffa6c1",
          300: "#ff7aa3",
          400: "#ff4d84",
          500: "#ff2165",
          600: "#cc1a51",
          700: "#99143d",
          800: "#660d28",
          900: "#330714",
        },
        secondary: {
          DEFAULT: "#302d40",
          100: "#e2e2e3",
          200: "#ccccd4",
          300: "#a2a2ac",
          400: "#797985",
          500: "#5d5d6e",
          600: "#4a4a5a",
          700: "#333342",
          800: "#23232d",
          900: "#16191e",
        },
        black: "#27282D",
        white: "#ECEDEE",
        light: "#F5F5F5",
        "bright-light": "#EBEBEB",
        "off-light": "#D0D1D2",
        dark: "#24272F",
        "bright-dark": "#3C4049",
        "off-dark": "#16191E",
        "exact-dark": "#3B4048",
      },
      screens: {
        xs: { min: "475px" },
      },
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      boxShadow: {
        xs: "0 1px #e5e7eb",
        sm: "0 2px #e5e7eb",
        md: "0 4px #e5e7eb",
        lg: "0 6px #e5e7eb",
        xl: "0 8px #e5e7eb",
        inset: "0 -2px #e5e7eb",
        "inset-md": "0 -4px #e5e7eb",
      },
      // @TODO customize drop-shadow
    },
  },
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "0px",
          medium: "0px",
          large: "0px",
        },
      },
    }),
    containerQueries,
  ],
};
