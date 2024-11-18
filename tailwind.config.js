const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Replace "sans" globally
      },
      animation: {
        scroll: "scroll 20s linear infinite", // Adjust timing for speed control
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)", // Start at the initial position
          },
          "100%": {
            transform: "translateX(-50%)", // Move by the width of one full set of items
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
