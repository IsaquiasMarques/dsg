/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#80B3A3',
        secondary: '#464646'
      }
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    }
  },
  plugins: [],
}
