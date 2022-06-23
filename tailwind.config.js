const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif']
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
