// src/components/Services.tsx
import React from "react";
import { Box, Heading, Text, useColorModeValue, Image } from "@chakra-ui/react";
import {
  FaHospital,
  FaInfoCircle,
  FaUsers,
  FaBullseye,
  FaHandsHelping,
} from "react-icons/fa";
const Services: React.FC = () => {
  return (
    <Box>
      {/* Services Section */}

      <Box
        id="services"
        bg="linear-gradient(to right, #ffffff, #c7c3c3)"
        py={10}
        px={5}
        textAlign="left" // Change text alignment to left for better readability
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        display="flex" // Use flex display to create a horizontal layout
        >
        {/* Left Image Section */}
        <Box flex="1" pr={{ base: 0, md: 8 }} px={{ base: 4, md: 8 }}>
          <Image
            src="/HServices.png" // Replace with your image path
            alt="Healthcare Services"
            maxW={{ base: "100%", md: "100%" }} // Full width on small screens, half width on larger screens
            borderRadius="md"
          />
        </Box>

        {/* Right Content Section */}
        <Box flex="1" pl={{ base: 0, md: 8 }} color="white">
          <Heading as="h2" size="lg" mb={6}>
            <FaHandsHelping
              style={{ display: "inline-block", marginRight: "8px" }}
            />
            Our Services
          </Heading>
          <Text fontSize="md" mb={4}>
            We offer a variety of services to help you find the best healthcare
            options:
          </Text>
          <Box>
            <Text mb={4}>- Hospital Search</Text>
            <Text mb={4}>- Verified Reviews</Text>
            <Text mb={4}>- Detailed Hospital Information</Text>
          </Box>
        </Box>
      </Box>

     
      

      
        
      </Box>
  
  );
};

export default Services;
