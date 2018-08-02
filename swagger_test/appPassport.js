
// const mje = 'holaaaaa';
// console.log

var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;
console.log(process.env.token)


passport.use(new BearerStrategy(
  function(token, done) {
      
      
      /*LOGICA PARA OBTENER LOS DATOS DEL USUARIO EN BASE AL TOKEN*/
    //   if(req.header['api-token'] == process.env.token){
    //       console.log('es valido')
    //   } else {
    //       console.log('no es valido')
    //   }
    }
))

module.exports = passport.authenticate('bearer', { session: false })