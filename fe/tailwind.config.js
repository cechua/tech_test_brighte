/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      primary: '#4ade80',
      secondary: '#9ca3af',
      'secondary-light': '#eeeeee',
      'primary-text': '#000000',
      'secondary-text': '#9ca3af',
      error: '#f87171',
    },
  },
  plugins: [],
};
