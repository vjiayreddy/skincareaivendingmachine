module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
          'fade-in-up': 'fadeInUp 1s ease-out forwards',
          'fade-in-up-delayed': 'fadeInUp 1s ease-out 0.3s forwards',
          'fade-in-up-more-delayed': 'fadeInUp 1s ease-out 0.6s forwards',
          'fade-in-up-most-delayed': 'fadeInUp 1s ease-out 0.9s forwards',
          'shimmer': 'shimmer 3s infinite',
          'expand': 'expandWidth 1s ease-out 1.2s forwards',
          'float': 'float 6s ease-in-out infinite',
          'float-delayed': 'float 8s ease-in-out 1s infinite',
          'gradient-slow': 'gradientShift 8s ease infinite alternate',
          'gradient-medium': 'gradientShift 5s ease infinite alternate',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          },
          shimmer: {
            '0%': { opacity: '0.5' },
            '50%': { opacity: '1' },
            '100%': { opacity: '0.5' }
          },
          expandWidth: {
            '0%': { transform: 'scaleX(0)' },
            '100%': { transform: 'scaleX(1)' }
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' }
          },
          gradientShift: {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '100% 50%' }
          }
        },
      },
    },
    plugins: [],
  }