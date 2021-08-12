module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "regal-blue": "#2A2840",
        "regal-blue-dark": "#000022",
        "air-red": "#EE7071",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
