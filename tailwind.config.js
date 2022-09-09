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
          400 : '#475467',
          500 : '#1C1D1F',
          600 : '#AC3AF0',
          700 : '#98A2B3',
          800 : '#ED05C8',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
