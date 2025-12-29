const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
  name: String,
  location: String,
  totalSeats: Number
});

module.exports = mongoose.model('Theatre', theatreSchema);
