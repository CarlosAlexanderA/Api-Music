/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      important: true,
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      gridTemplateColumns: {
        sect2: '2fr, minmax(200px, 1fr)',
        cardsFit: 'repeat(auto-fit, minmax(calc(25% - (4 * 24px / 3)), 1fr))',
        cardsGenre: 'repeat(auto-fit, minmax(calc(33% - (3 * 24px / 3)), 1fr))'

      }
    }
  },
  plugins: []
}
