import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";


const Contact: React.FC = () => {
  return ( 
    <Box>
      <Box 
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="black"
      padding="2rem"
      flexDirection="column"
      >
        <Heading as="h2" size="xl" mb={4}>
          
          Thank you for choosing CareFinder
        </Heading>
        <Text fontSize="md">
         We are here to help you find the
          best healthcare solutions for you and your loved ones. Together, we
          can make healthcare more accessible and transparent.
        </Text>
      </Box>
      
    </Box>
  )
};

export default Contact;