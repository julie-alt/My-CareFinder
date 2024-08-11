// src/components/Header.tsx
import React, {useEffect} from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";


const Header: React.FC = () => {
  
    
  return (
    
      <Box bgImage="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/Home.png')"
      bgPosition="center"
      bgSize="cover"
      bgColor="rgba(0, 0, 0, 0.5)"  
      bgBlendMode="overlay"         
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
      padding="2rem"
      flexDirection="column"
    >
      
      <Heading as="h1" size="xl" mb={4} >
        Welcome to Care Finder
      </Heading>
      <Text fontSize="lg" mb={4}>
      Making Healthcare Accessibility Easy
      </Text>
    </Box>

  
      
    
  );
};

export default Header;
