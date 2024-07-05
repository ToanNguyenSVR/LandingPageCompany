"use client";
import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D01F86",
    },
    secondary: {
      main: "#FFA0BC",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F8F8",
    },

    text: {
      primary: "#000000",
      secondary: "#464646",
    },
    error: {
      main: "#D01F86",
    },
    warning: {
      main: "#FFA0BC",
    },
    info: {
      main: "#565656",
    },
    success: {
      main: "#38AD1B",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "64px",
    },
    h2: {
      fontSize: "48px",
    },
    h3: {
      fontSize: "36px",
      textTransform: "none",
    },
    h4: {
      fontSize: "24px",
      // textTransform: "none",
    },
    body1: {
      fontSize: "20px",
      // textTransform: "none",
    },
  },
});

export default theme;
