const passport = require('passport');
const User = require('../models/user');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function register(req, res, next) {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error);
      return;
    }
    req.user = user;
    next();
  });
}

module.exports = {
  initialize: [passport.initialize(), passport.session()],
  register,
  signin: passport.authenticate('local', { session: true })
};
