// src/Utilities/mapApi.ts
import axios from 'axios';

export const fetchHospitals = async (query: string) => {
  try {
    const response = await axios.get(`https://api.reliancehmo.com/v3/providers?query=${query}`);
    return response.data; // Adjust based on actual response structure
  } catch (error) {
    throw new Error('Failed to fetch providers');
  }
};
