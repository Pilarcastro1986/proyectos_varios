
const config = require('../auth/config')
const serviceArticle = require(`${process.env.PWD}/services/serviceArticle`)
const articulos = require('../mongo/modelos/articulos.js')
// ************+ Articulos **************** //


function getArticles (req, res, next){
    const tags = req.query.tags;
    debugger
    serviceArticle.getArticles(tags)
    .then(articulos => {
        console.log(articulos)
        res.send(articulos)
    })
    .catch(error => {
        console.log('Error al buscar los articulos')
        next(error)
    })
}
// function postArticles (req, res) {
//     // console.log(req.body.articles)
//     let nvo = new articulos()
//     nvo.tags = req.body.articles.tags
//     nvo.title = req.body.articles.title
//     nvo.text = req.body.articles.text

//     nvo.save((err, productStored) => {
//       if (err) res.status(500).send({message: `Error al salvar en la base de datos ${err} `})
  
//       res.status(200).send({ nvo: productStored })
//     })
//   }

function postArticles(req, res, next){
    serviceArticle.postArticles(product)
    .then(articulo => {
        res.send(articulo)
    })
    .catch(error => {
        console.log('Error al eliminar este articulo')
        next(error)
    })
}

function deleteArticle (req, res, next){
    serviceArticle.deleteArticle(req.params.id)
    .then(function (){
        res.send('articulo eliminado')
    })
    .catch(error => {
        console.log('Error al eliminar este articulo')
        next(error)
    })
}

function putArticle (req, res, next) {
    serviceArticle.putArticle(req.params.id , req.body)
    .then(function (){
        res.send('Articulo Actualizado')
    })
    .catch(error => {
        console.log('Error al actualizar este articulo')
        next(error)
    })
}

module.exports = { getArticles, postArticles, deleteArticle, putArticle}