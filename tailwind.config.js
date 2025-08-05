/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blob: 'blob 7s infinite',
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        },
        blob: {
          '0%': { transform: 'translate(-33%, 33%) scale(1)' },
          '33%': { transform: 'translate(-33%, 28%) scale(1.1)' },
          '66%': { transform: 'translate(-38%, 33%) scale(0.9)' },
          '100%': { transform: 'translate(-33%, 33%) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'rotate(45deg) translateY(0)' },
          '50%': { transform: 'rotate(45deg) translateY(-20px)' },
        },
      },
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
      },
    },
  },
  plugins: [],
};
