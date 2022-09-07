/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./assets/**/*.{html,js}", "./index.html",],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
      colors:{
        dolvenGrad: {
          100 : '#EA4889',
          200 : '#EC38CF',
          300 : '#EC4697',
          400 : '#333399',
          500 : '#FF00CC',
        },
        dolvenCol:{
          100 : 'rgba(54, 54, 54, 0.15)',
          200 : '#8B8F97',
          300 : '#121212',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
