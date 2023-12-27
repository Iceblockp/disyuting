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
    },
  },

  plugins: [require("flowbite/plugin")],
};
