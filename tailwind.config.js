/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    raleway: ["Raleway", "sans-serif"], // Adding Raleway as a custom font family
  },
  backgroundImage: {
    'custom-gradient': 'linear-gradient(90deg, #e7492c, #ff914d)',
  },
  
  theme: {
    extend: {},
    screens: {
      "lg-small": { min:"1025px",max: "1280px" },
      "md-max": { min:"830px",max: "1024px" },
      "md-small": { min:"640px",max: "830px" },
      "sm-max": {min:"0px", max: "640px" },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
