const hotels = require('../mongo/models/hotels.js')

// EXPORTO LAS FUNCIONES QUE HACEN PETICIONES A MONGO.
// NO SE PUEDE USAR REQ, O RES PORQUE SON DE EXPRESS. EN SU LUGAR USO RESOLVE Y REJECT


module.exports = {

    getHotels() {
        return new Promise((resolve, reject) => {
            hotels.find()
            .then(hotels => {
                resolve(hotels)
            })
            .catch(error => {
                reject('Se produjo un error al buscar todos los hoteles ' + error)
            })
        })
    },


    getHotel(id) {
        return new Promise((resolve, reject) => {
            hotels.findById(id)
            .then(hotel => {
                resolve(hotel)
            })
            .catch(error => {
                reject('Se produjo un error al buscar ese hotel')
            })
        })
    },

    
    postHotel(body){
        return new Promise((resolve, reject) => {
            const hotelnew = new hotels(body)
            hotelnew.save()
            // hotels.create({
            //     name: req.body.name,
            //     stars: req.body.stars,
            //     price: req.body.price
            // })
            .then(hotelnew => {
                resolve(hotelnew)
            })
            .catch(error => {
                reject('no se pudo cargar')
            })
        })

    },

    deleteHotel(id){
        return new Promise((resolve, reject) => {
            hotels.findByIdAndRemove(id)
            .then(function(){
                resolve('El hotel se ha eliminado exitosamente')
            })
            .catch(error => {
                reject('No se pudo eliminar el hotel')
            })
        })
    }
}
