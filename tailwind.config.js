/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1ED760',
          black: '#121212',
          gray: '#B3B3B3',
          darkGray: '#282828',
        },
      },
    },
  },

}

