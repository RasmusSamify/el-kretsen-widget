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
        brand: {
          50: '#E0F7FE',
          100: '#BAE6FD',
          200: '#7DD3FC',
          400: '#06B4E4',
          500: '#0284C7',
          600: '#0369A1',
          700: '#075985',
          900: '#0C2540',
        },
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #06B4E4 0%, #0369A1 55%, #075985 100%)',
        'brand-soft': 'linear-gradient(180deg, #E0F7FE 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'widget': '0 24px 60px -20px rgba(2, 132, 199, 0.35), 0 10px 30px -8px rgba(15, 23, 42, 0.18)',
        'tile': '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px -4px rgba(15, 23, 42, 0.08)',
        'tile-hover': '0 2px 4px rgba(2, 132, 199, 0.1), 0 12px 24px -8px rgba(2, 132, 199, 0.25)',
      },
      animation: {
        'breathe': 'breathe 3.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        breathe: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(6, 180, 228, 0.55)' },
          '50%': { boxShadow: '0 0 0 14px rgba(6, 180, 228, 0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
