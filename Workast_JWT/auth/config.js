const jwt = require('jwt-simple')
const moment = require('moment')
const mongoConnection = require('../mongo/config/mongoConnection')



function createToken(user) {
    const payload = {
        sub : user._id, // va a validar con el id de mongo. puedo pasarle cualquier cosa

        // ait y exp se relacionan con el tiempo que va a esta vivo ese token, instalo moment.js 
        iat : moment().unix(), // unix significa que lo crea en el mismo moemnto.
        exp: moment().add(14, 'days').unix(), // desde el momento en que se creo (unix) que dure 14 dias.
    }
    // codifigo el payload y lo devuelvo.

   return jwt.encode(payload, mongoConnection.SECRET_TOKEN)
}

function decodeToken(token){
    const payload = jwt.decode(token, mongoConnection.SECRET_TOKEN)

    const decoded = new Promise((resolve, reject) => { // imp arrow fn en todos
         if(payload.exp <= moment().unix()){ // payload.exp guarda la fecha de expiracion, pregunto si es menor al tiempo actual
                resolve({
                    status: 401,
                    mensajes : 'El token expiro'
                })
            }
            resolve(payload.sub) 
        })
        return decoded
    }


module.exports = {createToken , decodeToken}