// File: server.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

console.log('api key' + HUBSPOT_API_KEY)

// Routes
app.get('/api/clients', async (req, res) => {
  console.log(`Received request on ${req.originalUrl}`);

  const config = {
    headers: { Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}` }
  };

  try {
    const response = await axios.get(`https://api.hubapi.com/crm/v3/objects/contacts`, config);
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching clients from HubSpot:', error);
    res.status(500).send('Server error');
  }
});

// Start the server

console.log('Starting the server...');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
