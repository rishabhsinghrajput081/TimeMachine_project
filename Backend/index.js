const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

// Configure environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS to allow requests from the frontend
app.use(cors({
  origin: 'http://localhost:3001'
}));

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Serve static images from the 'public/pictures' directory
app.use('/pictures', express.static(path.join(__dirname, 'public', 'pictures')));


// API Routes
app.use('/api/historical-figures', require('./routes/figures'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
