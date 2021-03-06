const config = require('../auth/config')
const usuarios = require('../mongo/modelos/usuarios.js')


function singUp(req, res){

    usuarios.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(user => {
        res.status(200).send({token : config.createToken(user)})
    })
    .catch(error => {
        console.log('Se produjo un error', error)

    })
}

function singIn(req, res){
    console.log('controller',req.body.users)
   // const email = req.body.users
    usuarios.findOne({ 
        email: req.body.users
    })
    .then(usuario => {
        if(usuario) {
            console.log('usuario', usuario)
            res.send({
                mensaje : 'te logeaste correctamente',
                token: config.createToken(usuario)
            })
        } else {
            res.status(400).send('Datos incorrectos')
        }
    })
    .catch(error => {
            console.log('Se produjo un error', error)
    })
}

function getUsers (req, res, next){
    usuarios.find()
    .then(usuarios =>{
        res.send(usuarios)
    })
    .catch(error => {
        console.log('Se produjo un error al buscar todos los usuarios')
        next(error)
    })
}

function postUsers (req, res, next){
    usuarios.create({
        name : req.body.name,
        avatar: req.body.avatar
    }).then(usuarios => {
        res.send({token : config.createToken(usuarios), usuarios})
    }).catch(error => {
        console.log('Se produjo un crear un usuarios')
        next(error)
    })
}

function deleteUser(req, res, next){
    usuarios.findByIdAndRemove(req.params.id)
        .then(() => {
            res.send('Usuario Eliminado')
        })
        .catch(error => {
            console.log('No se puede eliminar al usuario')
        })
    }

function putUsers(req, res, next){
    const datosParaActualizar = req.body;
    const idUsuario = req.params.id;
    usuarios.findByIdAndUpdate(idUsuario, datosParaActualizar)
    .then(datosNuevos => {
        res.send(datosNuevos)
    })
    .catch(error => {
        console.log('No se puede actualizar el usuario')
    })
}


module.exports = { singUp, singIn, getUsers, postUsers, deleteUser, putUsers }