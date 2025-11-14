/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        klein: {
          orange: '#FF8A4C', // friendly orange
          blue: '#4C8BFF',   // calm blue
          green: '#3BC47A',  // fresh green
          soft: '#F7F8FA',   // light gray background
          warmGray: '#F2F4F7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(16,24,40,0.08)'
      }
    },
  },
  plugins: [],
}
