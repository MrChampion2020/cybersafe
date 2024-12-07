// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "node_modules/flowbite-react/lib/esm/**/*.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   // eslint-disable-next-line no-undef
//   plugins: [
//     require('flowbite/plugin'),
//     require('tailwind-scrollbar'),
//   ],
// }

/** @type {import('tailwindcss').Config} */
const flowbitePlugin = require('flowbite/plugin');
const scrollbarPlugin = require('tailwind-scrollbar');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
    scrollbarPlugin,
  ],
};
