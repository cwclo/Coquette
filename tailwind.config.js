/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Bellefair', 'serif'],
        title: ['Perandory', 'sans-serif'],
      },
    },
  },
  safelist: [
    'pt-24',
    'scroll-mt-24',
  ],
  plugins: [],
};
