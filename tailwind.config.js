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
        'heading': ['Big Shoulders Display', 'sans-serif'],
        'para': ['Work Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#3089F3',
        'secondary': "#62DEF5",
        'text': "#D5E8EB",
        'accent': "#CADADD",

      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
