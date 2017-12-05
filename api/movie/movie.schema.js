const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/movies');

const db = mongoose.connection;

const movieSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  yearReleased: { type: Number, required: true },
  star: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
