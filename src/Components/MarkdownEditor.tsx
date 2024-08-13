import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsSave, BsTrash, BsImage } from "react-icons/bs";

interface MarkdownEditorProps {
  onSave?: (content: string) => void;
  onDelete?: () => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  onSave,
  onDelete,
}) => {
  const [content, setContent] = useState<string>("");
  const [hospitalName, setHospitalName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const toast = useToast();

  const handleSave = async () => {
    if (!hospitalName || !address || !email || !phone || !content) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "hospitals"), {
        name: hospitalName,
        address,
        email,
        phone,
        content,
      });

      if (onSave) {
        onSave(content);
      }

      setHospitalName("");
      setAddress("");
      setEmail("");
      setPhone("");
      setContent("");
    } catch (err) {
      setError("Error saving content. Please try again.");
      console.error("Error saving content:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    setContent("");
    setHospitalName("");
    setAddress("");
    setEmail("");
    setPhone("");
    if (onDelete) {
      onDelete();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Assuming you're directly using data URL for simplicity
        const imageUrl = reader.result as string;
        setContent(content + `\n\n![Image](${imageUrl})`);
      };
      reader.readAsDataURL(file);
      setSelectedImage(file);
    }
  };

  return (
    <Box p={6} bg="white" boxShadow="lg" borderRadius="md">
      <Stack spacing={4} mb={6}>
        <FormControl id="hospitalName">
          <FormLabel>Hospital Name</FormLabel>
          <Input
            type="text"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            placeholder="Hospital Name"
          />
        </FormControl>
        <FormControl id="address">
          <FormLabel>Hospital Address</FormLabel>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Hospital Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Hospital Phone</FormLabel>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
        </FormControl>
      </Stack>
      <FormControl id="content">
        <FormLabel>Content</FormLabel>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          placeholder="Write your content in Markdown..."
        />
      </FormControl>
      <Stack spacing={4} mt={6}>
        <Button colorScheme="gray" onClick={handleSave}>
          Save Content
        </Button>
        <Button variant="outline" onClick={handleDelete} colorScheme="red">
          Delete Note
        </Button>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          display="none"
          id="imageUpload"
        />
        <Button
          colorScheme="blue"
          onClick={() => document.getElementById("imageUpload")?.click()}
        >
          Upload Image
        </Button>
      </Stack>
      {error && (
        <Text color="red.500" mt={4}>
          {error}
        </Text>
      )}
      <Box mt={6}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Preview
        </Text>
        <Box p={4} bg="gray.100" borderRadius="md">
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
};

export default MarkdownEditor;
