/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "rgb(155, 57, 34)",
      secondary: "rgb(72, 30, 20)",
      accent: "rgb(242, 97, 63)",
      colorBg: "rgb(12, 12, 12)",
      danger: "rgb(251 113 133)",
    },
  },
  plugins: [],
};
