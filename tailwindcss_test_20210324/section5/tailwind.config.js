const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        fresh: {
          100 : '#D6FEC1',
          200 : '#AFFFB5',
          300 : '#EFFFFB',
          400 : '#C4FFFF',
          500 : '#AFE8FF',
          600 : '#ACFFD4',
        }
      },
      fontFamily:{
        noto: ['Noto Sans JP']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
