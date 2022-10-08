/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: "class",
  content: [
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    extend: {
      screens: {
        xs: "340px",
        "3xl": "1900px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-rose": "#62011F",
      },
      // fontFamily: {
      //   inter: "Inter, sans-serif",
      // },
      fontSize: {
        "7.5xl": "5.25rem",
        "9.5xl": "9rem",
        "10xl": "10rem",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        90: "90%",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        67: "16.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
}
