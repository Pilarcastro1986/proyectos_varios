
const config = require('../auth/config')
const serviceArticle = require('../services/serviceArticle')
const articulos = require('../mongo/modelos/articulos.js')
const fs = require('fs')
// ************+ Articulos **************** //


function getArticles(req, res, next) {
    const tags = req.query.tags;
    serviceArticle.getArticles(tags)
        .then(articulos => {
            res.send(articulos)
        })
        .catch(error => {
            console.log('Error al buscar los articulos')
            next(error)
        })
}

function getArticle(req, res, next) {
    const id = req.params.id;
    serviceArticle.getArticle(id)
        .then(articulos => {
            res.send(articulos)
        })
        .catch(error => {
            console.log('Error al buscar los articulos')
            next(error)
        })
}

// OPCION VIEJA CONTROLLER Y SERVICE EN UNO

function postArticles(req, res) {

    if (req.file) {
        
        const nvo = new articulos({
            name: req.body.name,
            price: req.body.price,
            condition: req.body.condition,
            brand: req.body.brand,
            productImage: req.file.path
        })

        nvo.save((err, productStored) => {
            if (err) res.status(500)

            res.status(200).send({ nvo: productStored })
        })
    }
    // console.log(req.file)
    // console.log(req.body)
}

// function postArticles(req, res, next){
//     console.log('req.file ',req.file);
//         const body = req.body
//         serviceArticle.postArticles(body)
//         .then(articulo => {
//             res.send(articulo)
//         })
//         .catch(error => {
//             console.log('Error al crear este articulo')
//             next(error)
//         })

//     }





function deleteArticle(req, res, next) {
    serviceArticle.deleteArticle(req.params.id)
        .then(function () {
            res.send('articulo eliminado')
        })
        .catch(error => {
            console.log('Error al eliminar este articulo')
            next(error)
        })
}

function putArticle(req, res, next) {
    let productId = req.params.id
    let update = req.body.articles
    console.log(productId)
    console.log('DATA EN controller node', update)
    serviceArticle.putArticle(productId, update)
        .then(articulos => {
            console.log('articulos en controller', update)
            res.send(articulos)
        })
        .catch(error => {
            console.log('Error al actualizar este articulo', error)
            next(error)
        })
}

module.exports = { getArticles, getArticle, postArticles, deleteArticle, putArticle }