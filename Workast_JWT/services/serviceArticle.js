const articulos = require('../mongo/modelos/articulos.js')

module.exports = {

    getArticles(tags) {
        return new Promise(function (resolve, reject) {
            const filter = tags ? { tags: { $in: tags } } : {}
            articulos.find(filter)
            .then(articulos => {
               resolve(articulos)
            }).catch(error => {
                reject('Error al buscar los articulos ' + error)
            })
        })
    },

    getArticle(id) {
        return new Promise(function (resolve, reject) {
            articulos.findById(id)
            .then(articulos => {
               resolve(articulos)
            }).catch(error => {
                reject('Error al buscar ese articulo ' + error)
            })
        })
    },


    postArticles(body) {
        return new Promise(function (resolve, reject) {
            const nuevoArt = new articulos(body)
            nuevoArt.save()
            .then(articulos => {
                resolve(articulos)
            })
            .catch(error => {
               reject('Error al crear el articulo')
            })
        })
    },

    deleteArticle(id) {
        return new Promise(function (resolve, reject) {
            articulos.findByIdAndRemove(id)
            .then(function (){
                resolve('articulo eliminado')
            })
            .catch(error => {
               reject('Error al eliminar este articulo')
            })
        })

    },

    putArticle(id, body){
        return new Promise(function(resolve, reject) {
            // const idArticle = req.params.id;
            // const datosParaActualizar = req.body;
        
            articulos.findByIdAndUpdate(id, body)
            .then(nuevos => {
                resolve(nuevos)
            })
            .catch(error => {
                reject('No se pudo modificar este articulo')
            })
        })
    }

}

