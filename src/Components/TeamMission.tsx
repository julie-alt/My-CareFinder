import React from "react";
import { Box, Heading, Text, useColorModeValue, Image } from "@chakra-ui/react";
import {
  FaHospital,
  FaInfoCircle,
  FaUsers,
  FaBullseye,
  FaHandsHelping,
} from "react-icons/fa";
const TeamMission: React.FC = () => {
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
          Our Team
        </Heading>
        <Text fontSize="lg">
          CareFinder is powered by a passionate team of healthcare enthusiasts,
          technologists, and customer service experts. We are dedicated to
          providing exceptional service and ensuring that you have a seamless
          experience every time you visit our platform.
        </Text>
      </Box>
    </Box>
  );
};

export default TeamMission;
