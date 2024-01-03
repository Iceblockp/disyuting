/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        heading: ["Big Shoulders Display", "sans-serif"],
        para: ["Work Sans", "sans-serif"],
      },
      screens: {
        xs: "340px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl":"1540px"
      },
     boxShadow: {
        'neon-blue': '0 0 10px #00a5ff, 0 0 20px #00a5ff, 0 0 30px #00a5ff',
      },
      colors: {
        'primary': '#3089F3',
        'secondary': "#62DEF5",
        'text': "#D5E8EB",
        'accent': "#CADADD",

      },
      colors: {
        'primary': '#3089F3',
        'secondary': "#62DEF5",
        'text': "#D5E8EB",
        'accent': "#CADADD",

      },
      
      colors: {
        'primary': '#3089F3',
        'secondary': "#62DEF5",
        'text': "#D5E8EB",
        'accent': "#CADADD",

      },
      screens: {
        '2xl': '1427px',
        
      },
      
    },
  },

  plugins: [require("flowbite/plugin")],
};
