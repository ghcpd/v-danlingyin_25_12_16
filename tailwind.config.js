module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        christmas: {
          green: '#15803d',
          red: '#dc2626',
          gold: '#fbbf24',
        },
      },
      keyframes: {
        blink: {
          '0%, 49%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 5px rgba(251, 191, 36, 0.5)' },
          '50%': { 'box-shadow': '0 0 20px rgba(251, 191, 36, 0.8)' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
