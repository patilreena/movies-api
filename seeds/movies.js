const Movie = require('../models/movie');

Movie.create([
  {
    title: 'Wonder Women',
    yearReleased: 2017,
    star: 'Gal gadot'
  },
  {
    title: 'Star Wars',
    yearReleased: 1977,
    star: 'Carrie fisher'
  }
]);
