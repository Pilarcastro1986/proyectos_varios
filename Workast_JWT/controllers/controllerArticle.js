
const config = require('../auth/config')
// ************+ Articulos **************** //


function getArticles (req, res, next){
    const tags = req.query.tags;
    const filter = tags ? {
                tags : {
                    $in : tags
                }
        } : {}
    req.modelos.articulos.find(filter).then(articulos => {
           
           const a = articulos.map(articulo => {
                console.log('bbbbbbaaaa',articulo.tags)
                articulo.tagssss = articulo.tags.join()
                console.log('aaaaaaaa',articulo.tagssss)
                return articulo

            })
            
            res.send(a)
        }).catch(error => {
            console.log('Error al buscar los articulos')
            next(error)
        })
    }

function postArticles(req, res, next){
    req.modelos.articulos.create({
        tags : req.body.tags,
        userId: req.body.userId,
        title: req.body.title,
        text: req.body.text
    })
    .then(articulos => {
        res.json(articulos)
    })
    .catch(error => {
        console.log('Error al buscar los articulos')
        next(error)
    })
}

function deleteArticle (req, res, next){
    req.modelos.articulos.findByIdAndRemove(req.params.id)
    .then(function (){
        res.send('articulo eliminado')
    })
    .catch(error => {
        console.log('Error al eliminar este articulo')
        next(error)
    })
}

function putArticle (req, res, next) {
    const idArticle = req.params.id;
    const datosParaActualizar = req.body;

    req.modelos.articulos.findByIdAndUpdate(idArticle, datosParaActualizar)
    .then(nuevos => {
        res.send(nuevos)
    })
    .catch(error => {
        console.log('No se pudo modificar este articulo')
        next(error)
    })
}

module.exports = { getArticles, postArticles, deleteArticle, putArticle}