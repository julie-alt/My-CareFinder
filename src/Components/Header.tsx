import React, { useEffect } from "react";
import { Box, Heading, Text, HStack, Link, Button } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Box
      bgImage="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/Home.png')"
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
      <Heading as="h1" size="xl" mb={4}>
        Welcome to CareFinder
      </Heading>
      <Text fontSize="lg" mb={4}>
        Making Healthcare Accessibility Easy
      </Text>
      <Text fontSize="md" mb={4} color="white">
        Your trusted partner in finding the best healthcare providers.
      </Text>
      <HStack spacing={4}>
        <Link href="/signup" color="white">
          <Button colorScheme="gray">Find Providers Near You</Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default Header;
