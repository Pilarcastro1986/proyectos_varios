// el controller tiene la respuesta de lo que se realizo en el servicio mediante mongo
// aqui se pueden manipular esos datos de respuesta.
// CONSULTAS A MONGO : SERVICIO (PARA PODER SER CONSUMIDOS POR MUCHOS CONTROLLERS) NO SE USA NI RES NI REQ. REEMPLAZO POR RESOLVE, REJECT
// EN EL CONTROLLER SE USA EXPRESS, PERO EN EL SERVICIO NO.

const hotelService = require(`${process.env.PWD}/services/hotelService.js`)


const getHotels = function (req, res, next) { // creo una constante que guarda una funcion que recibe los parametros req y res de express
    hotelService.getHotels() // ejecuto la funcion que necesito que esta adentro del servicio
        .then(response => { // manipulo esa respuesta
            res.json(response)
        }).catch(error => {
            res.json(error)
            next();
        })
    } 

const getHotel = function (req, res, next) {
    hotelService.getHotel(req.params.id) // en el servicio no puedo usar req, se lo paso en el controller y en el servicio le pongo un paramtero id
    .then(response => {
        res.json(response)
      }).catch(error => {
        res.json(error)
        next()
      })
    } 


const postHotel = function (req, res, next) {
    hotelService.postHotel(req.body)
    .then(nuevoHotel => {
        res.send(nuevoHotel) 
    })
    .catch(error => {
        res.json(error)
        next()
      })
    } 

const deleteHotel = function (req, res) {
    hotelService.deleteHotel(req.params.id)
    .then(response => {
        res.json(response)
      }).catch(error => {
        res.json(error)
        next()
    })
}



module.exports = { getHotels , getHotel, postHotel, deleteHotel } 



























// function getHotels(req, res) {
//     hotels.find()
//     .then(hotels => {
//         res.send(hotels)
//     })
//     .catch(error => {
//         console.log('Se produjo un error al buscar todos los hotel')
//     })
// }

// function getHotel (req, res) {
//     const id = req.params.id
//     hotels.findById(id)
//     .then(hotel => {
//         res.send(hotel)
//     })
//     .catch(error => {
//         console.log('Se produjo un error al buscar ese hotel')
//     })
// }

// function postHotel(req, res){
//     hotels.create({
//         name: req.body.name,
//         stars: req.body.stars,
//         price: req.body.price
//     })
//     .then(hotel => {
//         res.send(hotel)
//     })
//     .catch(error => {
//         console.log('no se pudo cargar')
//     })
// }

// function deleteHotel(req, res){
//     const id = req.params.id;
//     hotels.findByIdAndRemove(id)
//     .then(function(){
//         res.send('El hotel se ha eliminado exitosamente')
//     })
//     .catch(error => {
//         console.log('No se pudo eliminar el hotel')
//     })
// }

// module.exports = {getHotels, getHotel, postHotel, deleteHotel}