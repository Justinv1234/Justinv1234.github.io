const { blackA, green, mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...violet,
      },
    },
  },
  plugins: [],
}

