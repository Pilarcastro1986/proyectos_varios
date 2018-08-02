
var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;


passport.use(new BearerStrategy(
  function(token, done) {
      if(token == process.env.clave){ // token tiene los datos que le paso en el header del postman
       return done(null) // done es similar al req en express. si no hay errores retorna donde(null). null = no errores
      } else { // si los hay, done: mensaje de error
       return done({ mensaje :'usuario no identificado'})
      }
    }
))

module.exports = passport.authenticate('bearer', { session: false })
