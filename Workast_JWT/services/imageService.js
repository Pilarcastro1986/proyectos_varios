const imagenes = require('../mongo/modelos/images.js')


module.exports = {
    getImages() {
        return new Promise(function(resolve, reject){
            imagenes.find()
            .then(img => {
                resolve(img)
            })
            .catch(error=> {
                reject(error)
            })
        })
    }
}