// pages/index.tsx
import React from "react";
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";
import Services from "../Components/Services";
import About from "../Components/AboutVision";
import TeamMission from "../Components/TeamMission";
import Contact from "../Components/Contact";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import theme from "../theme/index"
import Footer from "../Components/Footer";
const Home: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar />
      
         
         <Header />
         <Services />
         <About />
         <TeamMission />
         <Contact />

        
       <Footer />
      </div>
    </ChakraProvider>
  );
};

export default Home;
