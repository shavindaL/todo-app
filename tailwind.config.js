/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
      fontWeight: {
        "regular": 400,
        "bold": 700
      },
      colors: {
        "bright_blue": "#3a7bfd",
        "gradient-left": "#57ddff",
        "gradient_right": "rgb(192, 88, 243)",
        "check_backgroud": "",
        "very_light_gray": "#fafafa",
        "very_light_grayish_blue": "#e4e5f1",
        "light_grayish_blue": "#d2d3db",
        "dark_grayish_blue": "#9394a5",
        "very_dark_grayish_blue": "#484b6a",
        "very_dark_blue": "#161722",
        "very_dark_desaturated_blue": "#25273c",
        "light_grayish_blue_dark": "	#cacde8",
        "light_grayish_blue_hover": "#e4e5f1",
        "dark_grayish_blue_dark": "#777a92",
        "very_dark_grayish_blue_dark": "#4d5066",
        "very_dark_grayish_blue_dark_hover": "#393a4c"
      },
      height: {
        '375': '375px',
        '1440': '1400px'
      },
      screens: {
        "desktop": { 'max': '1920px' },
        "mobile": { 'max': '375px' }
      },
      backgroundImage: {
        "desktop-light": "url('/bg-desktop-light.jpg')",
        'desktop-dark': "url('/bg-desktop-dark.jpg')",
        "mobile-light": "url('/bg-mobile-light.jpg')",
        'mobile-dark': "url('/bg-mobile-dark.jpg')",
      }
    },
  },
  plugins: [],
}
