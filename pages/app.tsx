import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from '../src/Components/NavBar';
import theme from "../src/theme/index"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp;
