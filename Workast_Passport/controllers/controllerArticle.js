



function getArticles (req, res, next){
    const tags = req.query.tags;
    if(tags){
        req.modelos.articulos.find({
                tags : {
                    $in : tags
                }
        }).then(articulos => {
            res.send(articulos)
        }).catch(error => {
            console.log('Error al buscar los articulos')
            next(error)
        })

    } else {
        req.modelos.articulos.find()
        .then(articulos => {
            res.send(articulos)
        })
        .catch(error => {
            console.log('Error al buscar los articulos')
            next(error)
        })
    }


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