/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
      },
      colors: {
        elk: {
          ink: '#0E1A14',
          forest: '#1F3D2E',
          moss: '#3A6B4F',
          sage: '#86A892',
          cream: '#F4F1EA',
          gold: '#C9A961',
        },
      },
      boxShadow: {
        'widget': '0 20px 60px -20px rgba(31, 61, 46, 0.45), 0 8px 24px -8px rgba(0,0,0,0.18)',
      },
      animation: {
        'breathe': 'breathe 3.5s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%,100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(58,107,79,0.45)' },
          '50%': { transform: 'scale(1.04)', boxShadow: '0 0 0 12px rgba(58,107,79,0)' },
        },
      },
    },
  },
  plugins: [],
};
