/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./vite-project/**/*.{html,js}"],
  theme: {
    colors: {
      'accent': '#EE4F3C',
      'white': '#fff',
      'primary': '#5D5D61',
      'header': '#353540',
      'secondary-white': '#F8F8F8',
      'subs-lines': '#FFFFFF33',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

