/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        gray : {
          100 : '#333333',
          200 : '#1f1f1f',
          300 : '#141414'
        },
        green : {
          100 : '#c5f82a'
        }
      }
    },
  },
  plugins: [],
}