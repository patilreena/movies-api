const express = require('express');
const authMiddleware = require('../middleware/auth.js');

const router = express.Router();

//Register new user
router.post('/register', authMiddleware.register, (req, res) => {
  res.json({ user: req.user });
});

router.post('/signin', authMiddleware.signin, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
