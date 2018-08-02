
const express = require('express');
const bodyParser = require('body-parser')
const twitter = require('twitter');
const twitsModel = require(`${process.env.PWD}/db/models/twits`)
const controller = require(`${process.env.PWD}/controller/searchTopic`)
const sendTweet = require(`${process.env.PWD}/controller/sendTweet`)
const params = require(`${process.env.PWD}/twitter/params`)

const config = require(`${process.env.PWD}/twitter/config`) 
const client = new twitter(config); 


const app = express()

.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())

//endpoint for search terms used in database.
.get('/search/topics' , controller.searchTopic)


.get('/', function(req, res){
    sendTweet(params)
    .then(response => {
        res.send(response)
    });
})


.use(express.static('./public'))
.use(function(error, req, res, next){
    console.log('Se produjo un error: ' + error)
})


module.exports = app
