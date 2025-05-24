/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 🌓 Enable dark mode using class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // যদি daisyUI use করো
};
