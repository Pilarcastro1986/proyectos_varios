const http = require('http')
const port = 5004;
const app = require('./app/app')
const mongoConnection = require('./db/config/mongoConnection')

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


