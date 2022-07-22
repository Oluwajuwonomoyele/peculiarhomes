/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1400px'
    },
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#101828',
        secondary: '#7f56d9'
      },
      boxShadow: {
        1: '0 4px 30px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
