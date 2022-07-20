/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif']
    },
    extend: {
      colors: {
        'darkblue': '#20222c',
        'pink': '#f73d93'
      },
    }
  },
  plugins: [],
}
