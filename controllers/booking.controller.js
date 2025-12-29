const Booking = require('../models/booking.model');
const Show = require('../models/show.model');

exports.bookSeats = async (req, res) => {
  const { showId, seats } = req.body;
  const show = await Show.findById(showId);

  if (!seats.every(s => show.availableSeats.includes(s))) {
    return res.status(400).json({ message: 'Seats not available' });
  }

  show.availableSeats = show.availableSeats.filter(
    s => !seats.includes(s)
  );
  await show.save();

  const booking = await Booking.create({
    user: req.user.id,
    show: showId,
    seats,
    totalAmount: seats.length * show.price
  });

  res.json(booking);
};
