/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        gallery: {
          50: '#faf9f6',
          100: '#f4f1ea',
          800: '#2f2b24',
          900: '#1f1b16',
        },
      },
      boxShadow: {
        soft: '0 14px 35px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
