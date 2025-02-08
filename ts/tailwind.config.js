/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "#f5f5f5",
        darkBlack: "#1a1a1a",
        darkGreen: "#2a9d8f",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // if using tailwind-scrollbar-hide
    // OR
    require('tailwind-scrollbar'), // if using tailwind-scrollbar
  ],
}