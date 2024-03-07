/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif;"],
    },

    extend: {
      fontSize: {
        heading: "24px",
        body: "16px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
