module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'text-white',
    'text-xl',
    'p-4',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Bellefair', 'serif'],
        title: ['Perandory', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
