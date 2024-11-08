const mongoose = require('mongoose');

const figureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  birth_year: {
    type: String,
    required: true,
  },
  death_year: {
    type: String,
  },
  image_path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Figure', figureSchema);
