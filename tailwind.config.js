/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/assets/images/bannermovie.png')",
      },
    },
    colors: {
      primary: "#330b0d",
      black: "#000000",
      white: "#ffffff",
      borderColor: "#707070",
      content: "#26292E",
      button: "#3167DE",
    },
  },
  plugins: [],
};
