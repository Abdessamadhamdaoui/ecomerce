import { createTheme } from '@mui/material/styles';

export const shades = {
  primary: {
    100: "#E9F6F9",
    200: "#B5E1EC",
    300: "#81CCE0",
    400: "#4DB7D4",
    500: "#19A2C7",
    600: "#1386A3",
    700: "#0E6A7F",
    800: "#094E5B",
    900: "#043237"
  },
  secondary: {
    100: "#FFF5E6",
    200: "#FFE3BF",
    300: "#FFD199",
    400: "#FFBE73",
    500: "#FFAB4D",
    600: "#DB8D3E",
    700: "#B76F2F",
    800: "#934F20",
    900: "#6F3111"
  },
  neutral: {
    100: "#F5F5F5",
    200: "#E0E0E0",
    300: "#CCCCCC",
    400: "#B7B7B7",
    500: "#A2A2A2",
    600: "#7F7F7F",
    700: "#5C5C5C",
    800: "#383838",
    900: "#151515"
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: 48,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 36,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 20,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
});
