import React from "react";
import { Box, Heading, Text, useColorModeValue, Image } from "@chakra-ui/react";
import {
  FaHospital,
  FaInfoCircle,
  FaUsers,
  FaBullseye,
  FaHandsHelping,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return ( 
    <Box>
      <Text fontSize="lg">
          Thank you for choosing CareFinder. We are here to help you find the
          best healthcare solutions for you and your loved ones. Together, we
          can make healthcare more accessible and transparent.
        </Text>
    </Box>
  )
};

export default Contact;