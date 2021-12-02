module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        VeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        DesaturatedDarkBlue: "hsl(214, 17%, 51%)",
        GrayishBlue: "hsl(212, 23%, 69%)",
        LightGrayishBlue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        Manrope: ["Manrope"],
      },
      fontSize: {
        tiny: ".813rem",
      },
      letterSpacing: {
        widest2: ".3em",
      },
      inset: {
        65: "65%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
