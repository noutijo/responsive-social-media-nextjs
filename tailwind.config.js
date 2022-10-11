const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        colorPrimary: "var(--color-primary)",
        colorWhite: "var(--color-white)",
        colorLight: "var(--color-light)",
        colorGray: "var(--color-gray)",
        colorSecondary: "var(--color-secondary)",
        colorSucsess: "var(--color-success)",
        colorDanger: "var(--color-danger)",
        colorDark: "var(--color-dark)",
        colorBlack: "var(--color-black)",
      },
    },
  },
  keyframes: ({ theme }) => ({
    showmenu: {
      from: { left: "-100%" },
      to: { left: "0%" },
    },
    hidemenu: {
      from: { left: "0%" },
      to: { left: "-100%" },
    },
  }),
  animation: {
    showmenu: "showmenu 400ms ease forwards",
    hidemenu: "hidemenu 400ms ease forwards",
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
