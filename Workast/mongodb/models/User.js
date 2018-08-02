const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = Schema({
    name : String,
    avatar : String
})

module.exports = mongoose.model('User' , User )