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
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1366px',
        },
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '1rem',
          xl: '1rem',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Unbounded Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
