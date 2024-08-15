import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      50: "#f5f5f5",
      100: "#e0e0e0",
      200: "#c0c0c0",
      300: "#a0a0a0",
      400: "#808080",
      500: "#606060",
      600: "#404040",
      700: "#202020",
      800: "#101010",
      900: "#000000",
    },
   
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});

export default theme;
