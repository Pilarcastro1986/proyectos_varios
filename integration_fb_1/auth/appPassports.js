
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const User = require('../mongo/models/users')



passport.use(new FacebookStrategy({
  clientID: "",
  clientSecret: "",
  callbackURL: "/auth/facebook/callback"
},
  function(accessToken, cb) {
      return cb(accessToken);
  }
));

module.exports = passport.authenticate('facebook', { failureRedirect: '/loginerror' })