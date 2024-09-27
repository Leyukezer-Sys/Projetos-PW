/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"], // Fonte Lobster
        "roboto-mono": ["Roboto Mono", "monospace"], // Fonte Roboto Mono
      },
    },
  },
  plugins: [],
};
