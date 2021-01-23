const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.js",
    "./components/**/*.tsx",
    "./components/**/*.js",
    "./components/**/*.scss",
    "./layouts/**/*.tsx",
    "./layouts/**/*.js",
    "./layouts/**/*.scss",
    "./styles/**/*.scss",
  ],

  theme: {
    nightwind: {
      colors: {
        white: "#141618",
        black: "gray.50",
      },
    },
    extend: {
      screens: {},
      colors: {},
    },
  },

  plugins: [require("nightwind")],
}
