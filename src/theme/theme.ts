import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#FAF7F2",
    },
    primary: {
      main: "#3A7DFF",
    },
    secondary: {
      main: "#F7C948",
    },
    error: {
      main: "#E45343",
    },
    text: {
      primary: "#4A4A4A",
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#E45343",
    },

    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },

    h6: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      fontWeight: 500,
    },

    body2: {
      fontSize: "0.9rem",
      color: "#4A4A4A",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      //   width: "200px",
    },
  },

  shape: {
    borderRadius: 12,
  },
});
