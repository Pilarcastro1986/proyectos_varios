

const express = require('express')
const bodyParser = require('body-parser')
const controllerUsers = require('../controllers/controllerUsers')
const controllerArticle = require('../controllers/controllerArticle')
const controllerImages = require('../controllers/controllerImages')

const getModels = require('../getModels')
const authJwtMiddleweare = require('../auth/authJwtMiddleweare')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
const multer = require('multer')
const storage = multer.diskStorage({ //multer me permite configurar con mas detalles como quiero que se alamcen las imagenes y con que nombre
    destination : function(req, file, cb){
        cb(null, './uploads/');
    },
    filename : function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
})
const upload = multer({storage : storage, limits: {
    fileSize : 1024 * 1024 * 5 // seteo un limite de tamaño
}}) // multer va a agarra mi configuracion guardada en storage



const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())


.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, true))

.use(function(req,res,next){
    req.modelos = getModels();
    next();
})


.get('/api/v1/articles', controllerArticle.getArticles)
.get('/api/v1/articles/:id', controllerArticle.getArticle)
.post('/api/v1/articles/', upload.single('image'), controllerArticle.postArticles)
.delete('/api/v1/articles/:id', controllerArticle.deleteArticle)
.put('/api/v1/articles/:id', controllerArticle.putArticle)


.get('/api/v1/users', controllerUsers.getUsers)
.put('/api/v1/users/:id', controllerUsers.putUsers)
.post('/api/v1/users', controllerUsers.postUsers)
.post('/api/v1/singup', controllerUsers.singUp) 
.delete('/api/v1/users/:id', controllerUsers.deleteUser)


.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
.use('/uploads', express.static('uploads'))
.use(express.static('./public'))
// endpoint para probar el api token
// .get('/api/v1/private', auth.isAuth, function(req, res){
//     res.status(200).send({mensaje: 'Tienes acceso'})
// })
// con este endpoint puedo crear nuevos usuarios con sus respectivos token







.use(function(error, req, res, next){
    console.log(`Se produjo un error: ${error}`)
})


module.exports = app