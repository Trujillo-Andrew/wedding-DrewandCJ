/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../Build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentcolor",
        white: "#ffffff",
        primaryColor: "#00b4d8",
        // secondaryColor: "#dbb42c",
        // tertiaryColor: "#dbb42c",
        // extraColor: "#2a440e",
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
