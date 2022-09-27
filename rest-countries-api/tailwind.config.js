/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: (theme) => theme("colors"),
      textColor: {
        darkMode: {
          100: "#FFFFFF",
        },
        lightMode: {
          100: "#111517",
          200: "#858585",
        },
      },
      colors: {
        darkMode: {
          100: "#2B3945",
          200: "#202C37",
        },
        lightMode: {
          100: "#FAFAFA",
          200: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
