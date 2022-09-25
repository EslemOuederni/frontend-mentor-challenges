/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: (theme) => theme("colors"),
      textColor: {
        primary: {
          100: "#FF5252",
        },
        secondary: {
          100: "#ffffff",
          200: "#DEDDDF",
          300: "#8E8593",
          400: "#21092F",
        },
      },
      colors: {
        secondary: {
          100: "#ffffff",
          200: "#DEDDDF",
          300: "#8E8593",
          400: "#21092F",
          500: "#FF5252",
        },
      },
    },
  },
  plugins: [],
};
