/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        large:"1168px"
      },
      backgroundColor: {
        fullblack: "#1C1C1C",
        "light-green": "#91f1c3",
      },
      colors: {
        primary: "#F6F6F6",
      },
      fontSize: {
        thirtyeight: "38px",
        eighty: "80px",
        twenty: "20px",
      },
      fontFamily: {
        montBold: ["Montbold", "cursive"],
        montSemibold: ["MontSemibold", "cursive"],
        sans: "'Mont', san-serif",
        montHeavy: ["Montheavy", "cursive"],
      },
    },
  
  },
  plugins: [],
};
