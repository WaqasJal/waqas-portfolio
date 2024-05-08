/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Imbue', 'Open Sans' , 'PT Sans', 'sans-serif'], // Replace 'Roboto' with the name of the font you imported
      },
      colors: {
        fuchsia: {
          DEFAULT: '#FF00FF' // HEX value for Fuchsia
        }
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
