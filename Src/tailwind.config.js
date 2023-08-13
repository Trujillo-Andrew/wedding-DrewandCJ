/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../Build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentcolor",
        white: "#ffffff",
        primaryColor: "#720026",
        yellowOne: "#ffdd32",
        yellowTwo: "#dbb42c",
        yellowThree: "#fff056",
      },
      fontFamily: {
        primaryHeader: "'Clicker Script', cursive",
        secondaryHeader: "'Playfair Display', serif",
        primaryBody: "'Ysabeau Office', sans-serif",
        secondaryBody: "'Ysabeau SC', sans-serif",
      },
    },
  },
  plugins: [],
};
