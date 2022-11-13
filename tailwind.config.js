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
        bronze_2: "#89715b",
        black_1: "#090909",
        black_2: "#111111",
        black_3: "#141414",
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
        hero: "url(/me.jpg)",
      },
    },
  },
}
