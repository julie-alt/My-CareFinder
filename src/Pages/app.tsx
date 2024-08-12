import { AppProps } from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from '../Components/NavBar';
import theme from "../theme/index";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp;
