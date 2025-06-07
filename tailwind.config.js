// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'leo-blue': '#1a202c', // Example dark blue, adjust as needed
        'leo-green': '#38a169', // Example vibrant green
        'leo-yellow': '#f6e05e', // Example bright yellow
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or 'Poppins', 'Montserrat', etc. - import from Google Fonts if needed
      },
    },
  },
  plugins: [],
}