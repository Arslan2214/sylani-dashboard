/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',

      'sm': '480px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1366px',
    },
    extend: {},
  },
  plugins: [],
})

// This will Generate a starter template for Tailwind config file that also Includes Responsive Widths, that setisfyies all types for Devices