/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F96162',
      },
      backgroundImage: {
        'main-banner': "url('../../public/images/banners/main-banner.jpg')",
      },
    },
  },
  plugins: [],
};
