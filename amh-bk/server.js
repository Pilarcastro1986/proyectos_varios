const http = require('http')
const app = require(`${process.env.PWD}/api/app.js`)
const port = require(`${process.env.PWD}/config/config.js`)
const mongoConection = require(`${process.env.PWD}/mongo/config/mongoConnection.js`)

http
    .createServer()
    .on('request', app)
    .on('error', function(error){
        switch (error.code){
            case 'EADDRINUSE':
            console.log('puerto en uso')
            break;
            case 'EACCES':
            console.log('error de permisos')
            break;
            default:
            throw error;
        }
    })
    .listen(port)