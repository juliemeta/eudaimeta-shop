import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#f8f7f5",
      paper: "#ffffff",
      subtle: "#f2f0ec",
      section: "#ece9e4",
      elevated: "#ffffff",
    },
    secondary: {
      main: "#D4A373",
      dark: "#000",
      light: "#fff",
    },
    error: {
      main: "#d32f2f",
      dark: "#000",
      light: "#fff",
    },
    warning: {
      main: "#ed6c02",
      dark: "#000",
      light: "#fff",
    },
    info: {
      main: "#0288d1",
      dark: "#000",
      light: "#fff",
    },
    success: {
      main: "#2e7d32",
      dark: "#000",
      light: "#fff",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },

  spacing: 8, // default MUI grid
});
