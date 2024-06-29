module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      colors: {
        neon: {
          100: '#39ff14',
          200: '#0dff72',
          300: '#00c6ff',
          400: '#ff00ff',
          500: '#ff073a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
