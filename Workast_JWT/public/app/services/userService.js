
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
    this. getPrivate = function(){
        return $http({
        url : '/api/v1/private',
        headers:{
            'Authorization': 'Bearer'  + ' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yjg3MmM3ODI4YmNkM2FhNjE4MGQ4ZjQiLCJpYXQiOjE1MzU1ODU0MDAsImV4cCI6MTY2MTgxNTgwMH0.hLZm7W4nwZQiecVJrU3alkFUAuYZQCMJxEL8S-DKK5g'
        },
        method: 'get'
    })
}
   
}

