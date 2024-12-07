/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
     
      },
      colors:{
        primary:'#4E46E8',
        neutral:{
          dark:'#1D1C31',
          light:'#FFFFFF',
          meduim:'#B6B3EB'
        }
      },
      fontFamily:{
        sans: ['Plus Jakarta Sans', 'sans-serif'], 
        poppins:['Poppins']
      }
    },
  },
  plugins: [],
}

