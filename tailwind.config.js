// const plugin = require("tailwindcss/plugin")
// const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
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
      typography: true,
      colors: {
        white: "#141618",
        black: "gray.50",
        blue: "yellow",
        yellow: "blue",
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              borderLeftColor: theme("colors.blue.600"),
            },
          },
        },
      }),
      screens: {},
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

  plugins: [require("@tailwindcss/typography"), require("nightwind")],
}
