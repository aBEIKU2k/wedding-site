/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F3',
        champagne: '#F5E6D3',
        gold: '#D4AF37',
        'muted-gold': '#C9A961',
        burgundy: '#800020',
        'deep-burgundy': '#5C0014',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
