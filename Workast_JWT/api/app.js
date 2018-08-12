

const express = require('express')
const bodyParser = require('body-parser')
const controllerUsers = require('../controllers/controllerUsers')
const controllerArticle = require('../controllers/controllerArticle')
const getModels = require('../getModels')
const authJwtMiddleweare = require('../auth/authJwtMiddleweare')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');



const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())


// .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, true))

.use(function(req,res,next){
    req.modelos = getModels();
    next();
})


.get('/api/v1/users', controllerUsers.getUsers)
.put('/api/v1/users/:id', controllerUsers.putUsers)
.post('/api/v1/users', controllerUsers.postUsers)
.post('/api/v1/singup', controllerUsers.singUp) 
.delete('/api/v1/users/:id', controllerUsers.deleteUser)


.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
.use(express.static('./public'))
// endpoint para probar el api token
// .get('/api/v1/private', auth.isAuth, function(req, res){
//     res.status(200).send({mensaje: 'Tienes acceso'})
// })
// con este endpoint puedo crear nuevos usuarios con sus respectivos token

.get('/api/v1/articles', controllerArticle.getArticles)
.post('/api/v1/articles/', controllerArticle.postArticles)
.delete('/api/v1/articles/:id', controllerArticle.deleteArticle)
.put('/api/v1/articles/:id', controllerArticle.putArticle)






.use(function(error, req, res, next){
    console.log(`Se produjo un error: ${error}`)
})


module.exports = app