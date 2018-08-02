const mongoose = require('mongoose')
const urlMongo =  'mongodb://localhost:27017/facebook_login';


const mongoConection = mongoose.connection.openUri(urlMongo , { useNewUrlParser: true } , function(err, res){
    if(err) return console.log(`Se produjo un error al intentar conectarse con la base de datos ${err}`)
    console.log('Conectado con exito a la base de datos de facebook_login')
})

module.exports = mongoConection

