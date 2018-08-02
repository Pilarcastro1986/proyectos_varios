
const express = require('express')
const bodyParser = require('body-parser')
const controllerUsers = require('../controllers/controllerUsers')
//const controllerArticle = require('../controllers/controllerArticle')
const getModels = require('../getModels')


// llamo a modulos y archivos para utulizar passport-http-bearer
const appPassport = require('../auth/appPassport.js')




const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())

.use(function(req,res,next){
    req.modelos = getModels();
    next();
})



// .use('/api', appPassport)

.use('/api',function(req,res,next){
    req.p = appPassport();
    console.log(req.p)
    next()
})


.get('/api/v1/users', controllerUsers.getUsers)
// .put('/api/v1/users/:id', controllerUsers.putUsers)
// .post('/api/v1/users', controllerUsers.postUsers)
// .delete('/api/v1/users/:id', controllerUsers.deleteUser)

// .get('/api/v1/articles', controllerArticle.getArticles)
// .post('/api/v1/articles/', controllerArticle.postArticles)
// .delete('/api/v1/articles/:id', controllerArticle.deleteArticle)
// .put('/api/v1/articles/:id', controllerArticle.putArticle)

.use(function(error, req, res, next){
    console.log(`Se produjo un error: ${error}`)
})


module.exports = app