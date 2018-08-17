
angular
	.module('app')
    .service('userService', userService)

	function userService($http){
		this.getUsers = function(){
            return $http({
            url : '/api/v1/users',
            method: 'GET'
        })
    }
}

