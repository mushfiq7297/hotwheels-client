/** @type {import('tailwindcss').Config} */
export default {
  /** @type {import('tailwindcss').Config} */
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require('daisyui'),
  ],
}
  

