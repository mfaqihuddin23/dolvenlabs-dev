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
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
