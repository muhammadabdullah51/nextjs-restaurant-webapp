// pages/api/data.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://admin:123@cluster0.nfnehip.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0';

const fetchData = async (req, res) => {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: 'URL is required' });
    }

    let client;

    try {
      client = await MongoClient.connect(uri);
      const db = client.db('db');

      // Find the user document based on the provided URL
      const user = await db.collection('asthetic').findOne({ url });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Return the user data
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default fetchData;
