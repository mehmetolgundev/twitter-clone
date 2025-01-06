/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1D9BF1',
        'twitter-blue-hover': '#1B8CD8',
        'twitter-signin-hover': '#051019',
        'twitter-border': '#536471',
        'twitter-white': '#EFF3F4',
        'twitter-white-hover':'#D7DBDC'
      },
    },
  },
  plugins: [],
}

