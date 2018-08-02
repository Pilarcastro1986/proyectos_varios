const config = require('./auth/config')

function getUsers (req, res, next){
    req.modelos.usuarios.find()
    .then(usuarios =>{
        res.send(usuarios)
    })
    .catch(error => {
        console.log('Se produjo un error al buscar todos los usuarios')
        next(error)
    })
}

function postUsers (req, res, next){
    req.modelos.usuarios.create({
        name : req.body.name,
        avatar: req.body.avatar
    }).then(usuarios => {
        res.send({token : config.createToken(usuarios), usuarios})
    }).catch(error => {
        console.log('Se produjo un crear un usuarios')
        next(error)
    })
}

function deleteUser(req, res, next){
    req.modelos.usuarios.findByIdAndRemove(req.params.id)
        .then(() => {
            res.send('Usuario Eliminado')
        })
        .catch(error => {
            console.log('No se puede eliminar al usuario')
        })
    }

function putUsers(req, res, next){
    const datosParaActualizar = req.body;
    const idUsuario = req.params.id;
    req.modelos.usuarios.findByIdAndUpdate(idUsuario, datosParaActualizar)
    .then(datosNuevos => {
        res.send(datosNuevos)
    })
    .catch(error => {
        console.log('No se puede actualizar el usuario')
    })
}



// ************+ Articulos **************** //


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

module.exports = { getArticles, postArticles, deleteArticle, putArticle, getUsers, postUsers, deleteUser, putUsers}