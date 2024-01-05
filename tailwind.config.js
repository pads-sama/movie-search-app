/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
        {
          'primary':"#0D0C11",
          'secondary':'#E50914',
          'light-text': '#fff',
          'darker-bg': '#17161B'
        }
      
    },
  },
  plugins: [],
}

