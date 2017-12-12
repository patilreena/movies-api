const express = require('express');
const authMiddleware = require('../middleware/auth.js');

const router = express.Router();

//Register new user
router.post(
  '/register',
  authMiddleware.register,
  authMiddleware.signJWTForUser
);

router.post('/signin', authMiddleware.signin, authMiddleware.signJWTForUser);

router.get('./movies', (req, res) => {
  res.send({ movies: ['Movies!'] });
});

module.exports = router;
