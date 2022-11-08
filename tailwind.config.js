const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bronze: "#88715B",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Zilla Slab", ...defaultTheme.fontFamily.serif],
      },
      content: {
        linkIcon: "url(/src/assets/svg/link.svg)",
        a: "url(/link.svg)",
      },
      backgroundImage: {
        hero: "url(/a.jpg)",
      },
    },
  },
}
