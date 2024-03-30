/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#495E57",
        secondary: "#F4CE14",
        third: "#EE9972",
        four: "#495E57",
        weekback: "#EDEFEE",
        portfolio_main: "#0d0e1e",
        pt_second: "#FEA423",
        pt_third: "#C3A5FF",
      },
      backgroundImage: {
        dish: "url('src/components/assets/rectanlge2.svg')",
        dish2: "url('src/components/assets/re3.png')",
      },
      screens: {
        xs: "450px",
        xL: "950px",
        midxl: "900px",

        ...defaultTheme.screens,
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(600px,1fr))",
        autosmall: "repeat(auto-fit, minmax(300px,1fr))",
      },
    },
  },
  plugins: [],
};
