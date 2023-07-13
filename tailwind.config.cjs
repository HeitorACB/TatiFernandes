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
    },
  },
  plugins: [],
};
