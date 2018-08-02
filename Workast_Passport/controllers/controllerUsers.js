
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

function getUsers (req, res, next){
    req.modelos.usuarios.find()
    .then(usuarios =>{
        res.send(usuarios)
    })
    .catch(error => {
        console.log('Se produjo un error al buscar todos los usuarios')
        next(error)
    })
}

function postUsers (req, res, next){
    req.modelos.usuarios.create({
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
    req.modelos.usuarios.findByIdAndRemove(req.params.id)
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
    req.modelos.usuarios.findByIdAndUpdate(idUsuario, datosParaActualizar)
    .then(datosNuevos => {
        res.send(datosNuevos)
    })
    .catch(error => {
        console.log('No se puede actualizar el usuario')
    })
}


module.exports = { singUp, sigIn, getUsers, postUsers, deleteUser, putUsers }