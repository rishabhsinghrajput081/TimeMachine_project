// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const figuresRouter = require('./routes/figures');  // Importing the figures route

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'pictures' directory
const picturesPath = path.join(__dirname, 'pictures');
app.use('/pictures', express.static(picturesPath));

// Use the figures route
app.use('/api/historical-figures', figuresRouter);

// Log requested URL
app.use((req, res, next) => {
  console.log(`Requested URL: ${req.originalUrl}`);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
