import { AppProps } from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from '../Components/NavBar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp;
