import React from "react";
import { Box, Heading, Text, Image, List, ListItem } from "@chakra-ui/react";
import { FaHandsHelping } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <Box>
      <Box
        id="services"
        bg="linear-gradient(to right, #ffffff, #c7c3c3)"
        py={10}
        px={5}
        textAlign="left"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex="1" pr={{ base: 0, md: 8 }} px={{ base: 4, md: 8 }}>
          <Image
            src="/HServices.png"
            alt="Healthcare Services"
            maxW={{ base: "100%", md: "100%" }}
            borderRadius="md"
          />
        </Box>

        {/* Right Content Section */}
        <Box flex="1" pl={{ base: 0, md: 8 }} color="#2C2626">
          <Heading as="h2" size="lg" mb={6}>
            <FaHandsHelping
              style={{ display: "inline-block", marginRight: "8px" }}
            />
            Our Services
          </Heading>
          <Text fontSize="md" mb={4}>
            We offer a variety of services to help you find the best healthcare
            options:
          </Text>
          <List spacing={3} fontSize="md">
            <ListItem>
              <Text as="span" fontWeight="bold">
                Hospital Search:
              </Text>{" "}
              Find hospitals near you easily.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Verified Reviews:
              </Text>{" "}
              Read authentic reviews from other users.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Detailed Information:
              </Text>{" "}
              Get comprehensive details about hospitals.
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
