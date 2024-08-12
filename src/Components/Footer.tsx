// components/Footer.tsx
import React from "react";
import { Box, Text, Link, Stack, Button } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      bg="gray.100"
      py={4}
      textAlign="center"
      mt={10}
      boxShadow="sm"
      position="relative"
      bottom="0"
      width="100%"
     >
      <Button variant="link" color="teal.500" mb={6}>
       Need help? Contact us at support@carefinder.com
      </Button>
      <Stack direction="row" spacing={4} justify="center" mb={6}>
        <Link href="/" color="teal.500">
          Home
        </Link>
        <Link href="#services" color="teal.500">
          Services
        </Link>
        <Link href="#about-us" color="teal.500">
          About Us
        </Link>
        <Link href="/contactUs" color="teal.500">
          Contact Us
        </Link>
      </Stack>
      <Text fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} CareFinder. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
