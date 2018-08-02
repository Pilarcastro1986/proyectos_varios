const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articulos = Schema({
    title : String,
    text : String,
    tags : [String]
})

module.exports = mongoose.model('articulos', articulos)