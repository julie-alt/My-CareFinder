// src/Utilities/uploadCSV.ts
import { storage } from '../firebase'; // Adjust the path to your firebase configuration file
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadCSVToFirebase = async (csvContent: string): Promise<string> => {
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const storageRef = ref(storage, `hospitals_${Date.now()}.csv`);

  try {
    const snapshot = await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading the file:', error);
    throw error;
  }
};
