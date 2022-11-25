/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: (theme) => ({}),
    screens: {
      xs: '540px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        abrilfatface: ['Abril Fatface', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        paytoneone: ['Paytone One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        rubikmaze: ['Rubik Maze', 'cursive'],
        tinos: ['Tinos', 'serif'],
        cormorant: ['Cormorant', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  corePlugins: {
    fontFamily: true,
  },
};

module.exports = nextConfig;
