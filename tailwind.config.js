/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        xmasGreen: '#0b6e3a',
        xmasRed: '#b91c1c'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.1' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'blink-slow': 'blink 1.6s infinite ease-in-out',
        'float-slow': 'float 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}