const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const getModels = require('./getModels')


const app = express()

.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())


.use(function(req,res,next){
    req.modelos = getModels();
    next()
})


.get('/api/personas', controller.getUsers)
.post('/api/personas', controller.postUsers)

.get('/api/articles', controller.getArticles)
.post('/api/articles/', controller.postArticle)
.put('/api/articles/:id', controller.putArticle)
.delete('/api/articles/:id', controller.deleteArticle)

.use(function(error, req, res, next) {
    console.log('Se produjo un error', error)
})

module.exports = app;