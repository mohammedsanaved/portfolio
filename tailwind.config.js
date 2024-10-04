/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  server: {
    host: true,
  },
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
      textShadow: {
        sm: "1px 1px 1px rgba(0, 0, 0, 0.1)",
        md: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        lg: "3px 3px 3px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
