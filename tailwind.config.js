/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-dark': '#0f172a',
        'slate-darker': '#0a0f1f',
        'accent-cyan': '#06b6d4',
        'accent-blue': '#3b82f6',
        'accent-purple': '#a855f7',
        'accent-warm': '#f97316',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
