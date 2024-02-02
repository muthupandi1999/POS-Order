/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: "#1fdf64",
        DarkGreen:"#008000",
        Black: "#000",
        DeepNightBlack: "#121212",
        MidNightBlack: "#181818",
        EveningBlack: "#1a1a1a",
        DarkGray: "#282828",
        SlateGray: "#404040",
        LightGray: "#959595",
        SilverGray: "#B3B3B3",
        Snow: "#ffffff",
        Primary: "#454859",
        // Primary: "#3F2E3E",
        Secondary: "#d9d9d9",
        SemiLight: "#f8f4ec",
        Light: "#F9F7F7",
        bgSlade300:"rgba(203 213 225)",
        LightGrayShade:"#F5F5F5",
        DarkText:"#232221",
        Pink:"#FF6969",
        SkyBlue:"#03A9F4",
        CurrentOrder:"#FFD5D5",
        ReadyOrder:"#d1f2d4",
        StartOrder:"#b4deff",
        DarkBlue:"#2196F3",
        LightShadow:"#f0f0ec",
        LightBlue:"#f8f8f8",
        ReadyStatus:"#c7fee3",
        InProgressStatus:"#ffeebd",
        Completed:"#e0ebfd"
      },
      transitionProperty: {
        'height': 'height',
      },
      fontFamily: {
        cairoRegular: ["cairo-regular", "sans-serif"],
      },
      screens: {
        phone: { max: "425px" },
        minTablet: { max: "720px" },
        // => @media (min-width: 640px) { ... }

        tablet: { max: "1024px" },
        // => @media (min-width: 1024px) { ... }

        labtop: { max: "1280px" },
        // => @media (min-width: 1280px) { ... }

        desktop: "1281px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "winter"],
  },
};
