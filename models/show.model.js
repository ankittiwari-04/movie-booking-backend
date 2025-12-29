const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  theatre: { type: mongoose.Schema.Types.ObjectId, ref: 'Theatre' },
  showTime: Date,
  price: Number,
  availableSeats: [Number]
});

module.exports = mongoose.model('Show', showSchema);
