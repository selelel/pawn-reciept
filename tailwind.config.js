/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black_: "#3E3E3E",
        green_: "#679E2F",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        reciept:
          "url('https://img.freepik.com/free-photo/view-white-crumpled-paper_1194-7544.jpg?w=740&t=st=1699946435~exp=1699947035~hmac=bdb20a1cc6bd2ee0ed6b8c672a06ab2958cef5aca7542c5d3dfd160d405b48ab')",
      },
    },
  },
  plugins: [],
};
