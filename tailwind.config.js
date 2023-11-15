/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black_: "#292929",
        green_: "#679E2F",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        reciept: ["Courier Prime", "monospace"],
        barcode: ["Libre Barcode 39", "cursive"],
      },
      backgroundImage: {
        reciept: "url('./context/img/reciept-bg.jpg')",
      },
      screens: {
        md: "874px",
        sm: "500px",
      },
    },
  },
  plugins: [],
};
