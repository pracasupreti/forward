/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-top": '0px 25px 50px 70px rgba(0, 0, 0, 0.75)',
      },
      fontFamily: {
        abril: ['"Abril Fatface"', "cursive"],
        inter: ['"Inter"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        archivo: ['"Archivo"', "sans-serif"],
      },
      keyframes: {
        spinText: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1080deg)' }, // 3 spins (360deg * 3)
        },
      },
      animation: {
        spinText: 'spinText 0.5s linear', // 0.5 seconds for three spins
      },
  


    },
  },
  plugins: [require('tailwind-scrollbar-hide'),],
};
