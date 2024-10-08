import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../assets/carefinder.png";
import {
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  Button,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
const Navbar: React.FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box boxShadow="sm" position="fixed" width="100%" zIndex="1000">
      <Flex
        alignItems="center"
        gap="2"
        p={4}
        bg="white"
        display={{ base: "none", md: "flex" }}
      >
        <Box display="flex" alignItems="center">
          <Image src={logo} alt="CareFinder Logo" width={150} />
        </Box>
        <Spacer />
        <ButtonGroup spacing={4}>
          <Link href="/" passHref>
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="#services" passHref>
            <Button variant="ghost">Services</Button>
          </Link>
          <Link href="#about-us" passHref>
            <Button variant="ghost">About Us</Button>
          </Link>
          <Link href="#contact" passHref>
            <Button variant="ghost">Contact Us</Button>
          </Link>
          <Link href="/signup" passHref>
            <Button>Sign Up</Button>
          </Link>
          <Link href="/login" passHref>
            <Button>Log in</Button>
          </Link>
        </ButtonGroup>
      </Flex>

      {/* Mobile Navbar */}
      <Flex
        p={4}
        bg="white"
        display={{ base: "flex", md: "none" }}
        justifyContent="space-between"
        alignItems="center"
        marginBottom="2rem"
      >
        <Box display="flex" alignItems="center">
          <Image src={logo} alt="CareFinder Logo" width={150} height={100} />
        </Box>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Link href="/" passHref>
                <Button colorScheme="gray" variant="ghost" onClick={onClose}>
                  Home
                </Button>
              </Link>
              <Link href="#services" passHref>
                <Button colorScheme="gray" variant="ghost" onClick={onClose}>
                  Services
                </Button>
              </Link>
              <Link href="#about-us" passHref>
                <Button colorScheme="gray" variant="ghost" onClick={onClose}>
                  About Us
                </Button>
              </Link>
              <Link href="#vision" passHref>
                <Button colorScheme="gray" variant="ghost" onClick={onClose}>
                  Vision and Mission
                </Button>
              </Link>
              <Link href="#contact" passHref>
                <Button variant="ghost">Contact Us</Button>
              </Link>
              <Link href="/signup" passHref>
                <Button colorScheme="gray" onClick={onClose}>
                  Sign Up
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button colorScheme="gray" onClick={onClose}>
                  Log in
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
