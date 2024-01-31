/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#17181D',
        highlight: '#ffc04a',
        secondary: '#121316',
        dullhighlight: '#8b712f'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}