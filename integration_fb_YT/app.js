// Archivo principal del Backend, configuración del servidor
// y otras opciones

var express = require('express'); // Express: Framework HTTP para Node.js
var routes = require('./routes'); // Dónde tenemos la configuración de las rutas
var path = require('path');

const bodyParser = require('body-parser')




const User = require('./mongo/models/users')

var mongoose = require('mongoose'); // Mongoose: Libreria para conectar con MongoDB
var passport = require('passport'); // Passport: Middleware de Node que facilita la autenticación de usuarios

// Importamos el modelo usuario y la configuración de passport
require('./mongo/models/users');
require('./auth/passport')(passport);
require('./mongo/config/mongoConnection');

// Iniciamos la aplicación Express
var app = express();




// Middlewares de Express que nos permiten enrutar y poder
// realizar peticiones HTTP (GET, POST, PUT, DELETE)

app.use(express.urlencoded({extended : true}));
app.use(express.json());




// Configuración de Passport. Lo inicializamos
// y le indicamos que Passport maneje la Sesión
app.use(passport.initialize());
app.use(passport.session());
app.get('/', routes.index)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(express.static('./public'))

/* Rutas de la aplicación */
// Cuando estemos en http://localhost:puerto/ (la raiz) se ejecuta el metodo index
// del modulo 'routes'



// Ruta para autenticarse con Facebook (enlace de login)
app.get('/auth/facebook', passport.authenticate('facebook'));

// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista '/login'
app.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/', failureRedirect: '/login' }
));
app.get('/', routes.index);
module.exports = app;
