
var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;
console.log('a',process.env.token)


passport.use(new BearerStrategy(
  function(token, done) {
      console.log('entrar')
      
      /*LOGICA PARA OBTENER LOS DATOS DEL USUARIO EN BASE AL TOKEN*/
      if(token === process.env.token){
        done(null) // find seg parametro 22:48
      } else {
        done({ mensaje :'usuario no identificado'})
      }
    }
))

module.exports = passport.authenticate('bearer', { session: false })