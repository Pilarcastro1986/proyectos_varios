
//Esta archivo tiene las funciones era para crear el nuevo usuario y su token.

const mongoose = require('mongoose')
const config = require('./config')



function singUp(req, res){
    req.modelos.usuarios.create({
        name: req.body.name,
        avatar: req.body.avatar
    })
    .then(user => {
        res.status(200).send({token : config.createToken(user)})
    })
    .catch(error => {
        console.log('Se produjo un error', error)

    })
}

function sigIn(req, res){
    //buscar en la bd 
    req.modelos.usuarios.find({ 
            name: req.body.name
        })
        .then(usuario => {
            req.usuario = usuario
            req.send({
            mensaje : 'te logeaste correctamente',
            token: config.createToken(usuario)
            })
        })
        .catch(error => {
             console.log('Se produjo un error', error)
        })
    }


// function sigIn(req, res){
//     //buscar en la bd 
//     req.modelos.usuarios.find({ 
//             name: req.body.name
//         }, (err, usuario) => {
//         if(err) return res.send({mensaje : err})
//         req.usuario = usuario
//         req.send({
//             mensaje : 'te logeaste correctamente',
//             token: config.createToken(usuario)
//         })
//     })
// }

module.exports = {sigIn, singUp}