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
        "input-width-large-screen": 'calc(100% - 150px)',
        "carousel-item-md": 'calc(25% - 15px)',
        "carousel-item-lg": 'calc(20% - 16px)'
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 100%, rgba(252,176,69,1) 100%)",
      },
      keyframes: {
        mobileMenu: {
          '0%': { transform: 'translateY(-130%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        mobileMenu: 'mobileMenu 0.3s ease forwards',
      },
      boxShadow: {
        socialIcon: '0 0 0.625em #da2f68',
      }
    },
  },
  plugins: [],
};
