angular
.module('app')
.service('jwtService', jwtService)

function jwtService(){
    
    var _jwt = null;
    this.save = function(jwt){
        _jwt = jwt
    }

    this.read = function(){
        return _jwt
    }

}

