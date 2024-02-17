/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#04152d",
        black2: "#041226",
        black3: "#020c1b",
        "black-lighter": "#1c4b91",
        "black-light": "#173d77",
        pink: "#da2f68",
        orange: "#f89e00",
        
      },
      width: {
        "input-width-small-screen": 'calc(100% - 100px)',
        "input-width-large-screen": 'calc(100% - 150px)'
      },
      backgroundImage: {
        gradient: "linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)",
      }
    },
  },
  plugins: [],
};
