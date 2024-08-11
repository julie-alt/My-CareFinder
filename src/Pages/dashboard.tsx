import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProtectedRoute from "../Components/ProtectedRoute";
import axios from "axios";
import { auth } from "../firebase";
import ExportButton from "../Components/ExportButton";
import ShareButton from "../Components/ShareButton";
import { Hospital } from "@/types";
import MarkdownEditor from "../Components/MarkdownEditor";
import {
  ChakraProvider,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Heading,
  List,
  ListItem,
  Divider,
  VStack,
  HStack,
  useToast,
  Flex,
  Icon,
  
} from "@chakra-ui/react";
import {MdLocationOn, MdPhone} from "react-icons/md";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import theme from "../theme/index";
import Image from "next/image";
import Link from "next/link";
 
import { signOut } from 'firebase/auth';

import logo from "../assets/carefinder.png";


const Header: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };


  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      bg="white"
      color="gray.500"
      borderBottom="1px solid rgba(255,255,255,0.2)"
    >
      <HStack spacing={4}>
      <Image src={logo} alt="CareFinder Logo" width={150} />
        
      </HStack>
      <HStack>
      <Text fontSize="xl" fontWeight="bold">Dashboard</Text>
      </HStack>
      
       
      <HStack spacing={4}>
      <Link href="/" passHref>
            <Button variant="outline" >
            <Icon as={FaHome} mr={2} />
              Home
              </Button>
          </Link>
        <Button variant="outline" colorScheme="red" onClick={handleLogout}>
          Logout
          <Icon as={FaSignOutAlt} ml={2} />
        </Button>
      </HStack>
    </Flex>
  );
};


const Dashboard: React.FC = () => {


  const [searchQuery, setSearchQuery] = useState("");
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsername = () => {
      const user = auth.currentUser;
      if (user) {
        setUsername(user.displayName || "User");
      }
    };

    fetchUsername();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.reliancehmo.com/v3/providers?query=${searchQuery}`
      );

      if (response.status !== 200) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const endpointData: any = response.data;
      console.log("API Response Data:", endpointData);

      if (!endpointData || !endpointData.data) {
        throw new Error("Invalid response structure");
      }

      const hospitals: Hospital[] = endpointData.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        address: item.address,
        state: item.state,
        email: item.email,
        phone: item.phone,
      }));

      
      const query = searchQuery.toLowerCase();
    const filteredHospitals = endpointData.data.filter((hospital: any) => {
      return (
        (typeof hospital.name === 'string' && hospital.name.toLowerCase().includes(query)) ||
        (typeof hospital.state === 'string' && hospital.state.toLowerCase().includes(query)) ||
        (typeof hospital.address === 'string' && hospital.address.toLowerCase().includes(query))
      );
    });
      setHospitals(filteredHospitals || []);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error fetching hospitals:", err);
        setError(`Error fetching hospitals: ${err.message}`);
      } else {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const clearList = () => {
    setHospitals([]);
  };

  const handleSaveContent = (content: string) => {
    console.log("Content saved:", content);
  };

  const handleDeleteContent = () => {
    setMarkdownContent("");
    console.log("Content deleted");
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.href = '/login'; // Redirect to login page after logout
    }).catch((error) => {
      console.error("Logout Error:", error);
    });
  };
 

  return (
    <ProtectedRoute>
     <ChakraProvider theme={theme}>
     <Flex direction="column" minHeight="100vh" bg="gray.50">
     <Header onLogout={handleLogout} />
     <Flex
        minHeight="100vh"
        align="center"
        justify="center"
        p={4}
        bg="gray.50"
      >
        <Box
          w="100%"
          maxW="4xl"
          bg="white"
          p={8}
          boxShadow="lg"
          borderRadius="md"
        >
          {username && (
            <Heading as="h2" size="lg" mb={6} textAlign="center" color="gray.600">
              Welcome, {username}!
            </Heading>
          )}
          
           
          
          <VStack spacing={4} mb={4} align="stretch">
            <FormControl>
              <FormLabel textAlign="center">Search for Hospitals</FormLabel>
              <Flex justify="center">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter your area"
                  maxW="400px" // Set a maximum width for the input
                  w="full"
                  borderColor="gray.300"
                  focusBorderColor="gray.400"
                />
              </Flex>
            </FormControl>
            <HStack spacing={4} justify="center">
              <Button
                colorScheme="gray"
                onClick={handleSearch}
                isLoading={loading}
              >
                {loading ? "Searching..." : "Search"}
              </Button>
              <Button variant="outline" onClick={clearList}>
                Clear List
              </Button>
            </HStack>
          </VStack>
          {error && (
            <Text color="red.500" mb={4} textAlign="center">
              {error}
            </Text>
        )}
        {hospitals.length > 0 && (
          <Box mb={6}>
            <HStack spacing={4} justify="center">
              <ExportButton data={hospitals} />
              <ShareButton data={hospitals} />
            </HStack>
          </Box>
        )}
        <List spacing={4}>
          {hospitals.map((hospital, index) => (
            <ListItem key={index} bg="gray.50" p={4} borderRadius="md">
              <Heading as="h2" size="md">
                {hospital.name}
              </Heading>
              <HStack spacing={2} mb={1}>
            <Icon as={MdLocationOn} boxSize={5} color="teal.500" />
            <Text>{hospital.address}</Text>
          </HStack>
          
            
            <Text>{hospital.email}</Text>
            
            <HStack spacing={2}>
            <Icon as={MdPhone} boxSize={5} color="teal.500" />
            <Text>{hospital.phone_number}</Text>
          </HStack>
            </ListItem>
          ))}
        </List>
        <Divider my={6} />
        <Button onClick={() => setShowEditor(!showEditor)} mb={4}>
          {showEditor ? "Hide Editor" : "Show Editor"}
        </Button>
        {showEditor && (
          <MarkdownEditor
            onSave={handleSaveContent}
            onDelete={handleDeleteContent}
          />
        )}
      </Box>
      </Flex>
      </Flex>
     </ChakraProvider>
    </ProtectedRoute>
  );
};

export default Dashboard;
