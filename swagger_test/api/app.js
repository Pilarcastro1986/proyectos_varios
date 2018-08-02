
// const appPassport = require('./appPassport.js')
// var passport = require('passport');
// var BearerStrategy = require('passport-http-bearer').Strategy;
const express = require('express')
const bodyParser = require('body-parser')
const controller = require('../controller')
const getModels = require('../getModels')
const auth = require('../auth/auth')
const userCtrl = require('../auth/authController')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./getSwagger.js')();



const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())

.use(function(req,res,next){
    req.modelos = getModels();
    next();
})

//min 1.09

.get('/api/v1/users',  auth.isAuth, controller.getUsers)
.put('/api/v1/users/:id', controller.putUsers)
.post('/api/v1/users', controller.postUsers)
.delete('/api/v1/users/:id', controller.deleteUser)
.post('/api/v1/singup', userCtrl.singUp) 

.get('/api/v1/articles', auth.isAuth, controller.getArticles)
.post('/api/v1/articles/', controller.postArticles)
.delete('/api/v1/articles/:id', controller.deleteArticle)
.put('/api/v1/articles/:id', controller.putArticle)

.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) // swaggerUi,serve devolverá los archivos estáticos necesarios para alojar la UI de Swagger 
//y el segundo param es la función de configuración para usar los parámetros de los usuarios que se configura en swagger.json

.use(function(error, req, res, next){
    console.log(`Se produjo un error: ${error}`)
})


module.exports = app