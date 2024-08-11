// src/theme/index.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gray: {
      50: '#f5f5f5',  // Lightest gray
      100: '#e0e0e0',  // Light gray
      200: '#c0c0c0',  // Medium gray
      300: '#a0a0a0',  // Darker gray
      400: '#808080',  // Dark gray
      500: '#606060',  // Even darker gray
      600: '#404040',  // Very dark gray
      700: '#202020',  // Almost black
      800: '#101010',  // Near black
      900: '#000000',  // Black
    },
  },
  // You can also customize other parts of the theme here
});

export default theme;
