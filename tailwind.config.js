module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#00f0ff",
          500: "#00c0cc",
        },
        magenta: {
          400: "#ff00f0",
          500: "#cc00c0",
        },
      },
      fontFamily: {
        sexy: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
