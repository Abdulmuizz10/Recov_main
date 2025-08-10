/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      // fontSize: {
      //   xs: ["12px", "16px"],
      //   sm: ["14px", "20px"],
      //   base: ["16px", "19.5px"],
      //   lg: ["18px", "21.94px"],
      //   xl: ["20px", "24.38px"],
      //   "2xl": ["24px", "29.26px"],
      //   "3xl": ["28px", "50px"],
      //   "4xl": ["48px", "58px"],
      //   "8xl": ["96px", "106px"],
      // },
      colors: {
        primary: "#ECEEFF",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "hero-bg": "url('assets/banners/hero-1.png')",
        "hero-bg2": "url('assets/banners/hero-2.png')",
        "login-bg": "url('assets/pics/image-1.svg')",
        "sign-in-bg": "url('assets/pics/image-2.svg')",
        "banner-bg":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),url('./src/assets/banners/static-image.jpg')",
      },
      // animation: {
      //   "pulse-slow": "pulse 5s ease-in-out infinite",
      //   "pulse-slower": "pulse 8s ease-in-out infinite",
      // },
      // keyframes: {
      //   glow: {
      //     "0%, 100%": {
      //       boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)",
      //     },
      //     "50%": {
      //       boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)",
      //     },
      //   },
      // },
      animation: {
        "glow-fast": "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
