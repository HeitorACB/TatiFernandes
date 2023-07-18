/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      colors: {
        primary: '#FF2C46',
        primaryAlt: '#ED2839',
        primaryAltDark: '#C0162A',
        white: '#F7F7F7',
        black: '#202020',
      },
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
