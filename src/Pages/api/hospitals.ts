// pages/api/hospitals.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import initMiddleware from '@/Utilities/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'HEAD'],
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  const { query } = req.query;
  if (!query) {
    res.status(400).json({ error: 'Query parameter is required' });
    return;
  }

  try {
    const apiUrl = `https://api.reliancehmo.com/v3/providers?query=${encodeURIComponent(query as string)}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API')
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};

export default handler;
