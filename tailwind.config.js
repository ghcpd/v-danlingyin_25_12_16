/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        xmasgreen: '#0b6d4f',
        xmasred: '#c53030'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        blink: 'blink 1.4s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
