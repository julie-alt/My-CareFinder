import React from "react";
import { Box, Heading, Text, useColorModeValue, Image } from "@chakra-ui/react";
import {
  FaHospital,
  FaInfoCircle,
  FaUsers,
  FaBullseye,
  FaHandsHelping,
} from "react-icons/fa";

const About: React.FC = () => {
  return (
    <Box>
      <Box
        id="about-us"
        bg="#ffffff"
        py={10}
        px={5}
        textAlign="left"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        display="flex"
      >
        <Box flex="1" pr={{ base: 0, md: 8 }} px={{ base: 4, md: 8 }}>
          <Image
            src="/About.png"
            alt="About us"
            maxW={{ base: "100%", md: "100%" }} // Full width on small screens, half width on larger screens
            borderRadius="md"
          />
        </Box>
        <Box flex="1" pl={{ base: 0, md: 8 }} color="">
          <Heading as="h2" size="xl" mb={4}>
            <FaInfoCircle
              style={{ display: "inline-block", marginRight: "8px" }}
            />
            About Us
          </Heading>
          <Text fontSize="lg" mb={4}>
            At CareFinder, our mission is to simplify the process of finding
            quality healthcare. We believe in providing our users with accurate
            and up-to-date information on hospitals, clinics, and other
            healthcare facilities in their area. Our platform is designed to be
            user-friendly and accessible, ensuring that everyone can find the
            care they need quickly and easily.
          </Text>
        </Box>
      </Box>

      {/* Our Vision Section */}
      <Box>
        <Box
          bgImage="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/Health Dice.png')"
          bgPosition="center"
          bgSize="cover"
          bgColor="rgba(230, 230, 230, 0.5)"
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
            Our Vision and Mission
          </Heading>
          <Heading as="h2" size="l" mb={4}>
            <FaBullseye
              style={{ display: "inline-block", marginRight: "8px" }}
            />
            Our Vision
          </Heading>
          <Text fontSize="md" mb={4}>
            At CareFinder, we envision a world where healthcare access is
            simplified and within reach for everyone. We strive to eliminate the
            uncertainty and stress that often accompany the search for medical
            facilities, by providing a comprehensive and easy-to-use platform.
          </Text>
          <Heading as="h2" size="l" mb={4}>
          <FaHospital style={{ display: "inline-block", marginRight: "8px" }} />
          Our Mission
        </Heading>
        <Text fontSize="md">
          We are committed to connecting you with the best healthcare providers
          in your area. Whether you are looking for a general practitioner, a
          specialist, or urgent care, CareFinder is here to help you navigate
          the healthcare landscape with confidence.
        </Text>
        </Box>
        
      </Box>
    </Box>
  );
};

export default About;
