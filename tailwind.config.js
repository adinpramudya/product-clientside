/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Optional: DaisyUI configuration (custom themes, etc.)
  daisyui: {
    themes: ["light", "dark"], // Example themes
  },
};
