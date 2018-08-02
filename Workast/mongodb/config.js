const urlMongo =  'mongodb://localhost:27017/usuarios';
const mongoose = require('mongoose')

const mongoConection = mongoose.connection.openUri(urlMongo, (err , res ) =>{
    if(err) return console.log(`se produjo un error ${err}`);
    console.log('conectado con exito')
})

module.exports = mongoConection;