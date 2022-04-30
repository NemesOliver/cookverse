module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // Theme colors go here
      colors: {
        primary: "#2DC76D",
        secondary: "#0F0F2C",
      },
    },
  },
  plugins: [],
};
