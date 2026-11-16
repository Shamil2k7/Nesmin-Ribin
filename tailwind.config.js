/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F4F1EA',
          soft: '#EAE4D9',
          card: '#FCFAF6',
        },
        brown: {
          DEFAULT: '#55432F',
          muted: '#887B6B',
          deep: '#3A2E20',
        },
        gold: {
          DEFAULT: '#A58B61',
          light: '#D8C8A9',
          hover: '#8E734D',
          glow: 'rgba(165, 139, 97, 0.2)',
        },
        olive: {
          DEFAULT: '#85846C',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        arabic: ['var(--font-amiri)', 'Amiri', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};
