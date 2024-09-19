/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFBE04',
        'primary-hover': ' #FF9F00'
      },
      fontFamily: {
        sans: ['Comfortaa', 'sans-serif']
      }, 
      boxShadow: {
        'deep': '0 10px 20px rgba(0, 0, 0, 0.2)',
        'deep-hover': '0 15px 30px rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
}