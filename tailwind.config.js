/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 16s linear infinite",
      },
       fontFamily: {
        raleway: ["Raleway", ...fontFamily.sans],
        figtree: ["Figtree", ...fontFamily.sans],
        OpenSans: ["Open Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

