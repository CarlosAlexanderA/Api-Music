/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      gridTemplateColumns: {
        new2: '2fr, minmax(200px, 1fr)'
      }
    }
  },
  plugins: []
}
