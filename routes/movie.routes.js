const router = require('express').Router();
const { createMovie, getMovies } = require('../controllers/movie.controller');

router.post('/', createMovie);
router.get('/', getMovies);

module.exports = router;
