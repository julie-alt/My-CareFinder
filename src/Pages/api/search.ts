import type { NextApiRequest, NextApiResponse } from 'next';

const searchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Extract query parameter
  const { q } = req.query;

  if (!q) {
    res.status(400).json({ error: 'Query parameter is missing' });
    return;
  }

  // Construct API URL
  const url = `https://api.reliancehmo.com/v3/providers?q=${encodeURIComponent(q as string)}&format=json`;

  try {
    // Fetch data from external API
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // Error handling
    res.status(500).json({ error: (error instanceof Error ? error.message : 'An unknown error occurred') });
  }
};

export default searchHandler;
