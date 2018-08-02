
// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
// const user = require(`${process.env.PWD}/mongo/models/users`)






// passport.use(new FacebookStrategy({
//     clientID: "431238257379668",
//     clientSecret: "8159faed5377981c0a94aab7a524f4ff",
//     callbackURL: "/auth/facebook/callback",
//     profileFields : ['id', 'displayNme', 'provider', 'photos']
//   },
//      function(accessToken, cb, profile, done) { //accessToken es el JWT generado por fb
//     //const id = profile.id;
//     User.findOrCreate({provider_id: profile.id}, function (err, user) {
//       if(err) throw err;
//       if(!err && user !== null) return done(null, user)
//       // Al igual que antes, si el usuario ya existe lo devuelve
// 			// y si no, lo crea y salva en la base de datos
// 			var user = new user({
// 				provider_id	: profile.id,
// 				provider		 : profile.provider,
// 				name				 : profile.displayName,
// 				photo				: profile.photos[0].value
//       });
//       user.save(function(err) {
// 				if(err) throw err;
// 				done(null, user);
// 			});
//     });
//   }
// ));





// module.exports = passport.authenticate('facebook', { failureRedirect: '/loginerror' })


const passport = require('passport')
var mongoose = require('mongoose');
const User = require(`${process.env.PWD}/mongo/models/users`)
// Estrategia de autenticación con Facebook
var FacebookStrategy = require('passport-facebook').Strategy;
// Fichero de configuración donde se encuentran las API keys
// Este archivo no debe subirse a GitHub ya que contiene datos
// que pueden comprometer la seguridad de la aplicación.


// Exportamos como módulo las funciones de passport, de manera que
// podamos utilizarlas en otras partes de la aplicación.
// De esta manera, mantenemos el código separado en varios archivos
// logrando que sea más manejable.
module.exports = function(passport) {

	// Serializa al usuario para almacenarlo en la sesión
	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	// Deserializa el objeto usuario almacenado en la sesión para
	// poder utilizarlo
	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});


	// Configuración del autenticado con Facebook
	passport.use(new FacebookStrategy({
    clientID: "431238257379668",
    clientSecret: "8159faed5377981c0a94aab7a524f4ff",
    callbackURL	 : '/auth/facebook/callback',
		profileFields : ['id', 'displayName', /*'provider',*/ 'photos']
	}, function(accessToken, refreshToken, profile, done) {
		// El campo 'profileFields' nos permite que los campos que almacenamos
		// se llamen igual tanto para si el usuario se autentica por Twitter o
		// por Facebook, ya que cada proveedor entrega los datos en el JSON con
		// un nombre diferente.
		// Passport esto lo sabe y nos lo pone más sencillo con ese campo
		User.findOne({provider_id: profile.id}, function(err, user) {
			if(err) throw(err);
			if(!err && user!= null) return done(null, user);

			// Al igual que antes, si el usuario ya existe lo devuelve
			// y si no, lo crea y salva en la base de datos
			var user = new User({
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
	}));

};