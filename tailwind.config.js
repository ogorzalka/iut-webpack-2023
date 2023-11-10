/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,css,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
  ],
}

