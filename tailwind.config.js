const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Press Start 2P", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryYellow: "#FFEE05",
        dark: "#010101",
        secondaryBlack: "#11111A",
        lightBlue: "#0096C4",
      },
    },
  },
  plugins: [],
};
