
const glob = require("glob")

module.exports = function(){ // se va a encargar de hacer los requiere de los modelos.
    return glob.sync("models/*.js") // como es sincronico lo tengo que guardar en un variable o retornarlo directamente
    .map(function(element){
        return require('./' + element) //agarra el nombre del archivo y devuelve el modelo, tal cual require('models/user')
    })
    .reduce(function(prev, element){
        prev[element.modelName] = element;
        return prev
    }, {})
}