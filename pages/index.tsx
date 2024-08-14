import React from "react";
import Navbar from "../src/Components/NavBar";
import Header from "../src/Components/Header";
import Services from "../src/Components/Services";
import Mission from "../src/Components/VisionSection";
import About from "../src/Components/AboutUs";
import Contact from "../src/Components/Contact";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/index";
import Footer from "../src/Components/Footer";
const Home: React.FC = () => {
  return (
    
      <div>
        <ChakraProvider theme={theme}>
        <Navbar />

        <Header />
        <Services />
        <About />
        <Mission />
        <Contact />
        <Footer />
        </ChakraProvider>
        
      </div>
  
  );
};

export default Home;
