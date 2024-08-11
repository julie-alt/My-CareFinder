
import axios from 'axios';

export const sendEmail = async (recipientEmail: string, fileURL: string): Promise<void> => {
  try {
    await axios.post('/api/send-email', {
      email: recipientEmail,
      fileURL: fileURL
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Email sending failed:', error.response.data);
      
    } else {
      console.error('Email sending failed:', error);
     
    }
  }
};
