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
      fontSize: {
        xxs: ["0.625rem", "0.75rem"],
        sm: ["0.9375rem", "1.875rem"],
        base: ["1rem", "1.875rem"],
        "3xl": ["2rem", "2.25rem"],
        "4xl": ["2.5rem", "2.625rem"],
        "5xl": ["3.125rem", "3.125rem"],
        "form-size": ["0.8125rem", "1.875rem"],
      },
    },
  },
  plugins: [],
};
