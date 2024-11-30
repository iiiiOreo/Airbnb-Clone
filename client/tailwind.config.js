/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5385D",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      // Make sure fontFamily is properly placed outside of keyframes
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
