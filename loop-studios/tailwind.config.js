//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors here
        primary: '#FFFCF7', // Adding a primary color
        secondary: '#ec775f', // Adding a secondary color
        accent: '#76b5bc',    // Adding an accent color
        background: '#EC755D', // Adding background color
      },
    },
  },
  plugins: [],
}