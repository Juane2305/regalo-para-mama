/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#fff9f7",
          primary: "#c08f63",
          dark: "#2b2b2b",
          accent: "#f3d8c7"
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};