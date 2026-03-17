/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#00C4FF',
        accent: '#FFD700',
        textLight: '#E0E0E0',
        textDark: '#333333',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
};
