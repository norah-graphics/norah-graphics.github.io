// tailwind.config.js
const borderGradientRadius = require('tailwindcss-border-gradient-radius');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    borderGradientRadius
  ],
};
