const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articulos = Schema({
    name:  String,
    price: Number,
    condition: String,
    brand: String,
    // brand: [String],
    // productImage:  [String]
    // ORIGINAL:
   productImage: { type: String }
})

module.exports = mongoose.model('articulos', articulos)