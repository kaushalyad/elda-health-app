/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: "350px", max: "500px" },
        tablet: { min: "501px", max: "700px" },
        biggerTablet: { min: "701px", max: "1200px" },
      },
    },
  },
  plugins: [],
};
