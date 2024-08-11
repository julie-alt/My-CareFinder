// src/pages/api/your-api-route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import initMiddleware from '@/Utilities/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: '*', // Update this to your allowed origin(s)
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Run cors middleware
  await cors(req, res);

  // Your API logic here
  res.status(200).json({ message: 'Hello, World!' });
};

export default handler;
