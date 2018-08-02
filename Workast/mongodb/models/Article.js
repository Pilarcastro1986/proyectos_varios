const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = Schema({
    userId: String,
   // userId : new mongoose.Types.ObjectId(), // REVISA QUE exista
    // userId : String, // en mongo todos los id son string. no number
    title : String,
    text : String,
    tags : [String]
    
})

module.exports = mongoose.model('Article' , Article )