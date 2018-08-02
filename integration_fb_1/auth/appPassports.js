
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const User = require('../mongo/models/users')



passport.use(new FacebookStrategy({
  clientID: "431238257379668",
  clientSecret: "8159faed5377981c0a94aab7a524f4ff",
  callbackURL: "/auth/facebook/callback"
},
  function(accessToken, cb) {
      return cb(accessToken);
  }
));

module.exports = passport.authenticate('facebook', { failureRedirect: '/loginerror' })