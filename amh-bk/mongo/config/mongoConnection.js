const mongoose = require('mongoose')
const urlMongo =  'mongodb://localhost:27017/amh';
const port = require(`${process.env.PWD}/config/config.js`)
const util = require('util');
//const mongoConection = util.promisify()


const mongoConection = mongoose.connection.openUri(urlMongo , { useNewUrlParser: true } , function(err, res){
    if(err) return console.log(`Se produjo un error al intentar conectarse con la base de datos ${err}`)
    console.log(`Conectado con exito a la bd AMG en el puerto ${port}`)
})

// return mongoConection(mongoose.connection.openUri(urlMongo , { useNewUrlParser: true })
//     .then(function(){
//         res.send(`Conectado con exito a la bd AMG en el puerto ${port}`)
//     })
//     .catch(error => {
//         console.log(`Se produjo un error al intentar conectarse con la base de datos ${err}`)
//     })
// )


module.exports = { mongoConection }