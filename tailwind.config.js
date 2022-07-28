module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0E1422",
        secondary: "#0D90F3",
        light: "#F2F2F2",
      },
    },
    screens: {
      lt: { max: "1439px" },
      // => @media (max-width: 1439px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "425px" },
      // => @media (max-width: 425px) { ... }
    },
  },
  plugins: [],
};
