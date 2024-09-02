/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'conic-gradient': 'conic-gradient(transparent, transparent, #00a6ff)',
      },
      animation:{
        "spin-slow": "spin 3s linear infinite"
      },
    },
  },
  plugins: [],
}

