const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  show: { type: mongoose.Schema.Types.ObjectId, ref: 'Show' },
  seats: [Number],
  totalAmount: Number,
  status: { type: String, default: 'CONFIRMED' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
