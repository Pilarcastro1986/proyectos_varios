
const twitsModel = require('../db/models/twits')
const params = require(`${process.env.PWD}/twitter/params`)

function searchTopic (req, res, next){

    // instancio un nuevo parametro
    const twit = new twitsModel({topic: params.q})


     if(twit.topic !== undefined && twit.topic !== null ){
   // si ese parametro es diferente a undefined y a null lo guardo
        twit.save(function(error) { 
            if(error) {
                console.log(error)
            }
        })
  // busco en la base para chequear si es un parametro repetido, si lo es, lo elimino.
       return twitsModel.find()
            .then(data => {
                const a = 
                    data.reduce(function(prev, element, index, data){
                        return prev
                    }, data)
                    .filter(function(element){
                        return element.topic !== undefined 
                    })
                    .map(function(element){
                        return element.topic
                    })
                    .reduce(function(a,b){
                        if (a.indexOf(b) < 0 ) a.push(b);
                        return a;
                    },[]);
                    res.send(a)
            })
        }
}

module.exports = {searchTopic}