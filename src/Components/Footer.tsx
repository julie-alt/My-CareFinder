import React from "react";
import { Box, Text, Link, Stack, Button, Icon } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <Box
      id="contact"
      bg="gray.100"
      py={4}
      textAlign="center"
      mt={10}
      boxShadow="sm"
      position="relative"
      bottom="0"
      width="100%"
    >
      <Button variant="link" color="black" mb={6}>
        Need help? Contact us at support@carefinder.com
      </Button>
      <Stack direction="row" spacing={4} justify="center" mb={6}>
        <Link href="/" color="black">
          Home
        </Link>
        <Link href="#services" color="black">
          Services
        </Link>
        <Link href="#about-us" color="black">
          About Us
        </Link>
        <Link href="#vision" color="black">
          Vision and Mission
        </Link>
      </Stack>
      <Stack direction="row" spacing={4} justify="center" mb={6}>
        <Link href="https://facebook.com" isExternal>
          <Icon as={FaFacebookF} boxSize={6} color="black" />
        </Link>
        <Link href="https://twitter.com" isExternal>
          <Icon as={FaTwitter} boxSize={6} color="black" />
        </Link>
        <Link href="https://instagram.com" isExternal>
          <Icon as={FaInstagram} boxSize={6} color="black" />
        </Link>
        <Link href="https://linkedin.com" isExternal>
          <Icon as={FaLinkedinIn} boxSize={6} color="black" />
        </Link>
      </Stack>
      <Text fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} CareFinder. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
