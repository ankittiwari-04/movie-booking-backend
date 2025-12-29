const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  language: String,
  genre: [String],
  releaseDate: Date
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
