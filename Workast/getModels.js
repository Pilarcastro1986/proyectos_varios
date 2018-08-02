const glob = require('glob')


module.exports = function(){
    return glob.sync("db/modelos/*.js")
    .map(function(element){
        return require('./' + element)
    })
    .reduce(function(prev, element){
        prev[element.modelName] = element;
        return prev
    }, {})
}