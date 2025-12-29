const Movie = require('../models/movie.model');

exports.createMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
};

exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};
