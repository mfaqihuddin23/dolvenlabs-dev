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
        },
        dolvenCol:{

        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
