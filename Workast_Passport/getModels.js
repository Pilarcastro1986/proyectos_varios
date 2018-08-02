const glob = require('glob')

debugger
module.exports = function(){
    return glob.sync("mongo/modelos/*.js")
    .map(function(element){
        return require('./' + element)
    }) // agarra el array y lo reduce a 1 objeto con dos propiedades que son los objetos.
    .reduce(function(prev, element){
        prev[element.modelName] = element;
        return prev
    }, {})

}