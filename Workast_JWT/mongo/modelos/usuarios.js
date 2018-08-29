const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usuarios = Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('usuarios', usuarios)