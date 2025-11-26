/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: '#D4C5B9',
          light: '#E8DDD3',
        },
        gray: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          500: '#666666',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
