// routes/figures.js
const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Get all figures
router.get('/', (req, res) => {
  db.query('SELECT * FROM figures', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching historical figures' });
    }
    res.json(results);
  });
});

// Create a new figure
router.post('/', (req, res) => {
  const { name, description, birth_year, death_year, image_path } = req.body;
  const sql = 'INSERT INTO figures (name, description, birth_year, death_year, image_path) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, description, birth_year, death_year, image_path], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error adding new historical figure' });
    }
    res.status(201).json({ id: result.insertId, name, description, birth_year, death_year, image_path });
  });
});

module.exports = router;
