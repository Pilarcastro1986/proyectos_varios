const mongoose = require('mongoose')
const Schema = mongoose.Schema

const twits = Schema({
    topic : String
})

module.exports = mongoose.model('twits', twits)