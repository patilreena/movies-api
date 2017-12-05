const express = require('express');

// Node.js body parsing middleware.
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const bodyParser = require('body-parser');

//create the server
const server = express(); //Creates express server or nodejs http server
server.use(bodyParser.json());
//movies router/controller
const moviesRouter = require('./routes/movies');

server.use('/movies', moviesRouter);

server.get('/', (req, res) => {
  res.json({
    resources: [
      {
        movies: '/movies'
      }
    ]
  });
});

// start the server and assigns a port
const port = 7000;
server.listen(port, () => {
  console.log(`Movies AOI Server running on ${port}`);
});
