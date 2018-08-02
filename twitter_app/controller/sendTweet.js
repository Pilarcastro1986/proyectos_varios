const express = require('express');
const twitter = require('twitter'); 
const config = require(`${process.env.PWD}/twitter/config`) 
const client = new twitter(config);
const util = require('util');
const fnsearch = util.promisify(client.get)


module.exports = function(params) {


    return new Promise((resolve, reject) => {
 
        client.get('search/tweets', params, function( error, tweets, response){
            if(error) {
                console.log("Error al buscar tweets"); 
                reject(error);
            } else {
                //console.log(tweets);
                resolve(tweets) // This line sends the tweets to the client making the http request.
            }
           
        }); 
    })
}