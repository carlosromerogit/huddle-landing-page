/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        opens: "'Open Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        darkcyan: "#00252e",
        accent: {
          100: "#ff8fd8",
          DEFAULT: "#ff52bf",
        },
        paleblue: "#f5faff",
      },
    },
  },
  plugins: [],
};
