
const mongoose = require('mongoose')
const urlMongo =  'mongodb://localhost:27017/twitter_api';


const mongoConection = 
    mongoose.connection.openUri(urlMongo , { useNewUrlParser: true })
    .then(response => {
         console.log('Conectado con exito a la base de datos')
    }).catch(error => {
        return console.log(`Se produjo un error al intentar conectarse con la base de datos ${err}`)
        next()
    })

module.exports = {mongoConection}