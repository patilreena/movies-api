const express = require('express');
const Movie = require('../models/movie.js');

const router = express.Router();

router.get('/', (req, res) => {
  const title = req.query.title;
  const query = {};
  if (title) {
    const regexp = new RegExp('^' + title);
    query.title = regexp;
  }
  Movie.find(query).then(movies => {
    res.json({ movies });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Movie.findById(id).then(movie => {
    res.json(movie);
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const movie = new Movie(body);
  movie
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(422).send({
        message: err.message
      });
    });
});

router.put('/:id', (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Movie.findOneAndUpdate({ _id: id }, req.body)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      res.status(422).send({
        message: err.message
      });
    });
});

module.exports = router;
