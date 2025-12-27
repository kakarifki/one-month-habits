/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f9f506",
        "background-light": "#f8f8f5",
        "background-dark": "#23220f",
        "stone-850": "#1c1c19",
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "full": "9999px"
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0,0,0,0.06)',
        'glow': '0 0 20px rgba(249, 245, 6, 0.3)',
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
}
