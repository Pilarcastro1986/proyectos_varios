const config = require('./config')
const mongoConnection = require('../mongo/config/mongoConnection')


function isAuth(req, res ,next){
    if(!req.headers.authorization){
        return res.status(401).send({mensaje: 'no estas autorizado'})
    }
    const token = req.headers.authorization.split(" ")[1] // en la pos 0 esta la palabra BEARER y en la 1 el apitoken

//     const payload = jwt.decode(token, mongoConnection.SECRET_TOKEN)
//     //compruebo si el token es valido aun o no

//     if(payload.exp <= moment().unix()){ //payload.exp guarda la fecha de expiracion, pregunto si es menor al tiempo actual
//         return res.status(401).send({mensaje: 'token expirado'})
//     } 
//     req.usuario = payload.sub
//     next()

    config.decodeToken(token)
        .then(response => {
            req.user = response
            next()
        })
        .catch(response => {
            console.log('error')
        })
        
}

module.exports = {isAuth}