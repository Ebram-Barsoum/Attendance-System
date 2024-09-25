/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-700": '#4E3105',
        "primary-600": '#FFBA67',
        "primary-500": '#FEC887',
        "primary-100": '#F6F2EB',
        "secondary-500": '#263238',
        "secondary-400": '#263238E6',
        "secondary-300": '#26323899',
        "secondary-200": '#26323887',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

