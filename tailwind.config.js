/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '98': '390px',
      },
      margin: {
        'delhi-xl-l': '535px',
        'delhi-xl-t': '270px',
        'delhi-l': '240px',
        'delhi-t': '115px',
        'delhi-lg-l': '365px',
        'delhi-lg-t': '180px',
        'delhi-sm-l': '210px',
        'delhi-sm-t': '100px',

        'hyderabad-xl-l': '635px',
        'hyderabad-xl-t': '390px',
        'hyderabad-l': '280px',
        'hyderabad-t': '165px',
        'hyderabad-lg-l': '425px',
        'hyderabad-lg-t': '255px',
        'hyderabad-sm-l': '240px',
        'hyderabad-sm-t': '145px',
        '100': '390px'

      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "doodle-i": "url('/public/doodle.jpeg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
};
