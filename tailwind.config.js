/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/getTodos.js"],
  theme: {
    extend: {
      colors: {
        rgba: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
