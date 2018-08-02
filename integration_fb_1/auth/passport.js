
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
const user = require(`${process.env.PWD}/mongo/models/users`)






passport.use(new FacebookStrategy({
    clientID: "431238257379668",
    clientSecret: "8159faed5377981c0a94aab7a524f4ff",
    callbackURL: "/auth/facebook/callback",
    profileFields : ['id', 'displayNme', 'provider', 'photos']
  },
     function(accessToken, cb, profile, done) { //accessToken es el JWT generado por fb
    //const id = profile.id;
    User.findOrCreate({provider_id: profile.id}, function (err, user) {
      if(err) throw err;
      if(!err && user !== null) return done(null, user)
      // Al igual que antes, si el usuario ya existe lo devuelve
			// y si no, lo crea y salva en la base de datos
			var user = new user({
				provider_id	: profile.id,
				provider		 : profile.provider,
				name				 : profile.displayName,
				photo				: profile.photos[0].value
      });
      user.save(function(err) {
				if(err) throw err;
				done(null, user);
			});
    });
  }
));





module.exports = passport.authenticate('facebook', { failureRedirect: '/loginerror' })