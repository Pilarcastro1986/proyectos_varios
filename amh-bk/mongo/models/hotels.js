const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotels = Schema({
    name: String,
    price: Number,
    stars : Number
})

module.exports = mongoose.model('hotels', hotels)