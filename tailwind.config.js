const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Press Start 2P", ...defaultTheme.fontFamily.sans],
        fifaks: "fifaks",
      },
      colors: {
        primaryYellow: "#FFEE05",
        dark: "#010101",
        secondaryBlack: "#11111A",
        lightBlue: "#0096C4",
        aspidBlue: "#0287FF",
      },
      backgroundImage: {
        sectionBg: "url('/section-bg.png')",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(500px,1fr))",
      },
    },
  },
  plugins: [],
};
