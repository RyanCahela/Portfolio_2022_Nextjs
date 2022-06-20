/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#5FB4A2",
        "dark-blue": "#203A4C",
        "grayish-dark-blue": "#33323D",
        "very-light-gray": "#FAFAFA",
        "light-gray": "#EAEAEB",
        "bright-red": "#F43030",
      },
      fontFamily: {
        serif: ["Ibarra Real Nova", "serif"],
        sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
