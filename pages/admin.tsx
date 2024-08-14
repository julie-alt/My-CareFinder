import React from 'react';
import MarkdownEditor from '../src/Components/MarkdownEditor';
import ProtectedRoute from '../src/Components/ProtectedRoute';
import { Box, Heading, useToast } from '@chakra-ui/react';

const AdminPage: React.FC = () => {
  const toast = useToast();

  const handleSave = (content: string) => {
    console.log('Content saved:', content);
    toast({
      title: "Content saved.",
      description: "Your changes have been saved successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <ProtectedRoute>
      <Box maxW="3xl" mx="auto" px={4} py={8}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Admin Page
        </Heading>
        <MarkdownEditor onSave={handleSave} />
      </Box>
    </ProtectedRoute>
  );
};

export default AdminPage;
