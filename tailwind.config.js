/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter","sans-serif"]
      },
      backgroundImage: {
        'custom-bg': "url('./src/assets/background.svg')",
      },
    },
    screens:{
      lg:{min:"925px"},
    }
  },
  plugins: [],
}

