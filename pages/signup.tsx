import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../src/firebase";
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
  useToast,
  Flex,
  Link,
  Icon,
} from "@chakra-ui/react";
import theme from "../src/theme/index";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const isFirebaseError = (err: unknown): err is { message: string } => {
    return (err as { message: string }).message !== undefined;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user profile in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username,
        firstName,
        lastName,
        email,
      });

      alert("Sign up successful! Redirecting to login page...");
      router.push("/login");
    } catch (err) {
      console.error("Error signing up:", err);
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        username: user.displayName,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ")[1] || "",
        email: user.email,
      });

      alert("Google Sign up successful! Redirecting to dashboard...");
      router.push("/dashboard");
    } catch (err) {
      if (isFirebaseError(err)) {
        if (err.message === "auth/popup-closed-by-user") {
          setError("Sign-in popup closed by user.");
        } else {
          setError(err.message);
        }
      } else {
        setError("An unknown error occurred.");
      }
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
          maxW="lg"
          w="full"
          bg="white"
          boxShadow="lg"
          rounded="lg"
          p={8}
          borderWidth={1}
          borderColor="gray.200"
        >
          <Heading as="h1" size="lg" mb={6} textAlign="center" color="gray.600">
            Sign Up to CareFinder
          </Heading>
          <form onSubmit={handleSignUp}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  autoComplete="Enter your firstName"
                  borderColor="gray.300"
                  focusBorderColor="gray.400"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your Last Name"
                  autoComplete="lastName"
                  borderColor="gray.300"
                  focusBorderColor="gray.400"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  autoComplete="email"
                  borderColor="gray.300"
                  focusBorderColor="gray.400"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  autoComplete="username"
                  borderColor="gray.300"
                  focusBorderColor="gray.400"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Flex position="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    borderColor="gray.300"
                    focusBorderColor="gray.400"
                  />
                  <Icon
                    as={showPassword ? FaEyeSlash : FaEye}
                    position="absolute"
                    right="0.5rem"
                    top="50%"
                    transform="translateY(-50%)"
                    cursor="pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    color="gray.500"
                    boxSize={5}
                    zIndex={1}
                  />
                </Flex>
              </FormControl>
              <Button
                type="submit"
                colorScheme="gray"
                isLoading={loading}
                width="full"
                mt={4}
                borderRadius="md"
              >
                Sign Up
              </Button>

              <Text textAlign="center" mt={4}>
                Already have an account?{" "}
                <Link color="gray.400" href="/login">
                  Login
                </Link>
              </Text>

              <Button
                colorScheme="red"
                width="full"
                mt={4}
                onClick={handleGoogleSignUp}
                isLoading={loading}
                borderRadius="md"
                leftIcon={<Icon as={FaGoogle} />}
              >
                Login with Google
              </Button>

              {error && (
                <Text color="red.500" textAlign="center" mt={4}>
                  {error}
                </Text>
              )}
            </Stack>
          </form>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default SignUp;
