/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        dark: {
          primary: "#1A1A1A",
          secondary: "#2E2E2E",
        },
        background: "#1A1A1A",
        highlight: "#019863",
      },
    },
  },
  plugins: [],
});
