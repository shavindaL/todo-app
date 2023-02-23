const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "desktop": "1440px",
        "mobile": "375px"
      },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "check-background": "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue-dark": "hsl(234, 39%, 85%)",
        "light-grayish-blue-dark-hover": "hsl(236, 33%, 92%)",
        "dark-grayish-blue-dark": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue-dark": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-hover": "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        "josefin": ["'Josefin Sans'", "sans-serif"],
      },
      width: {
        "screen-30": "30vw"
      },
      height: {
        "screen-5": "5vh",
        "screen-30": "30vh",
        "screen-95": "95vh"
      },
      fontWeight: {
        "400": 400,
        "700": 700
      },
      backgroundImage:{
        "img-light" : "url('../public/bg-desktop-light.jpg')",
        "img-dark" : "url('../public/bg-desktop-dark.jpg')",
        "img-light-mobile" : "url('../public/bg-mobile-light.jpg')",
        "img-dark-mobile" : "url('../public/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
}

