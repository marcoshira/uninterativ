// theme.ts
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#F37748",
      contrastText: "#fff",
      light: "#F69A79",
    },
    secondary: {
      main: "#fff",
      light: "#62BFED",
    },
    error: {
      main: red.A400,
    },
    grey: {
      800: "#62BFED",
    },
    background: {
      default: "#F2F2F2",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h2",
          subtitle2: "h3",
          body1: "span",
          body2: "span",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&.Mui-disabled": {
            WebkitTextFillColor: "#F37748", // your custom color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&.Mui-disabled": {
            color: "#F37748", // custom disabled color
          },
        },
      },
    },
  },
});

export default theme;
