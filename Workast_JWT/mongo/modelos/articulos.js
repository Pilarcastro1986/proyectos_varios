const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articulos = Schema({
    name:  String,
    price: Number,
    colection: String,
    condition: String,
    comment: String,
    brand: String,
    productImage: String,
    productImage1: String,
    productImage2: String


    // ORIGINAL:
   // productImage: { type: String },
})

module.exports = mongoose.model('articulos', articulos)

