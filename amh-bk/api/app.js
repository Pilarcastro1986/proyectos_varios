const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const hotelsController = require(`${process.env.PWD}/controllers/hotelsController.js`)
const routes = require(`${process.env.PWD}/routes/routes.js`);
const swaggerDocument = require(`${process.env.PWD}/documentations/swagger.json`);


const app = express()

.use(bodyParser.json())
.use(bodyParser.urlencoded({extended: true}))

.get('/api/v1/hotels', hotelsController.getHotels)
.get('/api/v1/hotels/:id', hotelsController.getHotel)
.post('/api/v1/hotels', hotelsController.postHotel)
.delete('/api/v1/hotels/:id', hotelsController.deleteHotel)

.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


.use(express.static('./public'))

.use(function(error, req, res, next){
    console.log(`Se produjo un error : ${error}`)
})

module.exports = app