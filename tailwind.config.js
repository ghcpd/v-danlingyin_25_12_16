/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        xmasGreen: '#0f9d58',
        xmasRed: '#d32f2f'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'blink-fast': 'blink 1.6s infinite ease-in-out',
        'float-slow': 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};