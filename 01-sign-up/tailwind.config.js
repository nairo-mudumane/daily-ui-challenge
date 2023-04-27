/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{jsx,tsx}", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#3D28CF",
        blue2: "#533EDE",
      },
    },
  },
  plugins: [],
};
