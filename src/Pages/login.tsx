import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import { collection, query, where, getDocs } from "firebase/firestore";

import {
  ChakraProvider,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Flex,
  Icon,
  Link
} from "@chakra-ui/react";
import theme from "../theme/index"
import { FaGoogle } from 'react-icons/fa';

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Attempting login...");
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("No user found with this username.");
        setLoading(false);
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userEmail = userDoc.data().email;

      await signInWithEmailAndPassword(auth, userEmail, password);
      console.log("User logged in successfully");

      router.push("/dashboard");
    } catch (err: any) {
      console.error("Error logging in:", err);
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Redirect or handle successful Google sign-in
      router.push("/dashboard");
    } catch (err) {
      console.error("Error with Google sign-in:", err);
      setError("An error occurred during Google sign-in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-r, gray.300, gray.100)"
      py={12}
      px={6}
    >
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="md"
        maxWidth="lg"
        w="full"
        borderColor="gray.200"
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center"  color="gray.600">
          Log In
        </Heading>
        <form onSubmit={handleLogin}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                borderColor="gray.300"
                focusBorderColor="gray.400"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                borderColor="gray.300"
                focusBorderColor="gray.400"
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="gray"
              isLoading={loading}
              width="full"
              borderRadius="md"
            >
              Log In
            </Button>
            <Text textAlign="center" mt={4}>
              Don&apos;t have an account?{" "}
              <Link color="gray.400" href="/signup" >
                Sign Up
              </Link>
            </Text>
            <Text textAlign="center" mt={4}>
              Or
            </Text>
            <Button
              colorScheme="red"
              width="full"
              mt={4}
              onClick={handleGoogleSignIn}
              isLoading={loading}
              borderRadius="md"
              leftIcon={<Icon as={FaGoogle} />}
            >
              Login with Google
            </Button>
           
            {error && <Text color="red.500" textAlign="center" mt={4}>{error}</Text>}
          </Stack>
        </form>
      </Box>
    </Flex>
    </ChakraProvider>
  );
};

export default Login;
