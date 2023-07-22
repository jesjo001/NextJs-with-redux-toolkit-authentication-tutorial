import { DefaultTheme } from "styled-components";
export const darkTheme = {
  name: "dark",
  borderRadius: "4px",
  bodyColor: "#121212",
  textColor: "#a5a5a5",
  font: "Mulish",
  palette: {
    common: {
      black: "#121212",
      white: "#ffffff",
    },
    primary: {
      main: "#121212",
      contrastText: "#F59E0B",
    },
    secondary: {
      main: "#F59E0B",
      contrastText: "#ffffff",
    },
  },
  button: {
    primary: {
      main: "#F59E0B",
      contrastText: "#121212",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#121212",
    },
  }
};