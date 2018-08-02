const http = require('http');
const app = require('./api/app');
const port = 5002;
const mongoConection = require('./mongo/config/mongoConnection')


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
