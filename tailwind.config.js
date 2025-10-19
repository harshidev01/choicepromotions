/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: " #55E6A5",
        background: "#02050A",
        foreground: "#ffffff"
      }
    },
  },
  plugins: [],
}