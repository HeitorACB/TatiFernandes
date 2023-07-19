/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      screens: {},
      container: {
        center: true,
        screens: {
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: '2rem',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        title: ['Unbounded Variable', 'sans-serif'],
      },
      fontSize: {
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
