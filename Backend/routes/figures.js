const express = require('express');
const router = express.Router();
const Figure = require('../models/Figure'); // Assuming you have a Figure model for MongoDB

// Get all historical figures
router.get('/', async (req, res) => {
  try {
    const figures = await Figure.find(); // Fetch all figures from the MongoDB collection
    res.json(figures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new historical figure
router.post('/', async (req, res) => {
  const { name, description, birth_year, death_year, image_path } = req.body;

  try {
    const newFigure = new Figure({
      name,
      description,
      birth_year,
      death_year,
      image_path,
    });

    await newFigure.save();
    res.status(201).json(newFigure);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
