/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url(./images/desktop.svg)",
        'mobile': "url(./images/mobile.svg)"
      },
      colors: {
        'Violet': "hsl(257, 40%, 49%)",
        'Soft-Magenta': "hsl(300, 69%, 71%)"
      }
    },
  },
  plugins: [],
}