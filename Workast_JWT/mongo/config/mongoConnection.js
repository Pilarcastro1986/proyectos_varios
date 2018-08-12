const mongoose = require('mongoose')
const urlMongo =  'mongodb://localhost:27017/workplace_viernes';


const mongoConection = mongoose.connection.openUri(urlMongo , function(err, res){
    if(err) return console.log(`Se produjo un error al intentar conectarse con la base de datos ${err}`)
    console.log('Conectado con exito a la base de datos Workast_JWT puerto 5001')
})

// module.exports = { SECRET_TOKEN: 'pilar2020', mongoConection } ;


module.exports = {
    mongoConection, SECRET_TOKEN: 'pilar2020'
}