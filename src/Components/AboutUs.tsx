import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import {FaUsers} from "react-icons/fa";
const About: React.FC = () => {
  return (
    <Box>
      <Box
        bgImage="linear-gradient(to bottom, rgba(230,230,230,0.5), rgba(230,230,230,0.5)),url('/Team.png')"
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
        <Heading as="h2" size="xl" mb={4}>
          <FaUsers style={{ display: "inline-block", marginRight: "8px" }} />
          About Us
        </Heading>
        <Text fontSize="lg">
        At CareFinder, our mission is to simplify the process of finding
            quality healthcare. We believe in providing our users with accurate
            and up-to-date information on hospitals, clinics, and other
            healthcare facilities in their area. Our platform is designed to be
            user-friendly and accessible, ensuring that everyone can find the
            care they need quickly and easily.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
