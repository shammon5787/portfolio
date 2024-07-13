/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Roboto", "sans-serif"],
      },
      colors:{
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff01f",
      },
      boxShedow: {
        shadowOne: "10px 10px 19px #1c1e22 -10px -10px 19px #262a2e"
      }
    },
  },
  plugins: [],
}

