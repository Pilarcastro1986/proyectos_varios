
angular
	.module('app')
    .service('userService', userService)

	function userService($http){
		this.getUsers = function(data){
            console.log('servicio angular', data)
            return $http({
            url : '/api/v1/singin',
            data: {
                users: data
            },
            method: 'POST'
        })
    }
}

