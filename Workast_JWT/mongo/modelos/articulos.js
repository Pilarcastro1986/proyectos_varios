const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articulos = Schema({
    name:  String,
    price: Number,
    condition: String,
    brand: String,
    productImage:  { type: String },
    productImage1:{ type: String },
    productImage2:{ type: String }


    // ORIGINAL:
   // productImage: { type: String },
})

module.exports = mongoose.model('articulos', articulos)