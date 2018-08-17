const fs = require('fs');


function getImages(req, res, next) {
    fs.readdir('./uploads', function (err, files) {
        return new Promise(function(resolve, reject){
            resolve(files)
        }).then(files => {
            res.send(files)
        }).catch(error => {
            console.log('error')
            next(error)
        })
    });
}

module.exports = {getImages}