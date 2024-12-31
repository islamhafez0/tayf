/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: {
          DEFAULT: "#683694",
          light: "#68369433",
        },
        bodyBackground: "#F8F9FF",
        bodyColor: "#2D2D2D",
      },
      fontFamily: {
        arabic: ["Cairo", "sans-serif"],
        english: ["Poppins", "serif"],
      },
      boxShadow: {
        "features-dropshadow": "34.85px 29.63px 48.34px 0px #3366FF0D",
      },
    },
  },
  plugins: [],
};
