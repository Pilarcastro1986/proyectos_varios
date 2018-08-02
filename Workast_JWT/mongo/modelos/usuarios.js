const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usuarios = Schema({
    name: String,
    avatar: String
})

module.exports = mongoose.model('usuarios', usuarios)