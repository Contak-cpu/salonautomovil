import { defineConfig } from '@tailwindcss/postcss';

export default defineConfig({
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0D0D0D',
        'gray-dark': '#1A1A1A',
        'gray-light': '#E5E5E5',
        'white': '#FFFFFF',
        'accent': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
});
