const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personas = Schema({
    name : String,
    avatar : String
})

module.exports = mongoose.model('personas', personas)