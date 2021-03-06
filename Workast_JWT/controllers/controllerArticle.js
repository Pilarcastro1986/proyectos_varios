
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

    if (req.files.length > 1 && req.files.length < 3) {
        console.log('primero',req.files.length)
        const nvo = new articulos({
            name: req.body.name,
            price: req.body.price,
            condition: req.body.condition,
            colection: req.body.colection,
            comment : req.body.comment,
            brand: req.body.brand,
            productImage: req.files[0].path,
            productImage1: req.files[1].path
        })
        nvo.save((err, productStored) => {
            if (err) res.status(500)
    
            res.status(200).send({ nvo: productStored })
        })
    }  else if (req.files.length == 3){
       console.log('tres',req.files.length)
        const nvo = new articulos({
            name: req.body.name,
            price: req.body.price,
            condition: req.body.condition,
            colection: req.body.colection,
            comment : req.body.comment,
            productImage: req.files[0].path,
            productImage1: req.files[1].path,
            productImage2: req.files[2].path
        })
        nvo.save((err, productStored) => {
            if (err) res.status(500)
    
            res.status(200).send({ nvo: productStored })
        })
    } else{
        const nvo = new articulos({
            name: req.body.name,
            price: req.body.price,
            condition: req.body.condition,
            colection: req.body.colection,
            comment : req.body.comment,
            productImage: req.files[0].path
        })
        nvo.save((err, productStored) => {
            if (err) res.status(500)
    
            res.status(200).send({ nvo: productStored })
        })
    }
}


// function postArticles(req, res, next){
//         const body = req.body
//         serviceArticle.postArticles(payload)
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