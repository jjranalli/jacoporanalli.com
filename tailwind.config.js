const plugin = require("tailwindcss/plugin")
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
        blue: "yellow",
        yellow: "blue",
      },
    },
    extend: {
      screens: {},
      colors: {},
    },
  },

  variants: {
    nightwind: ["group-hover"],
    extend: {
      textColor: ["group-hover"],
      opacity: ["group-hover"],
      translate: ["group-hover"],
    },
  },

  plugins: [
    require("nightwind"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    // plugin(),
  ],
}
