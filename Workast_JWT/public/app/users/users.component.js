angular
	.module('app')
    .component('userComponent', {
        bindings: {},
        templateUrl : 'app/users/users.html',
        controller :usersCtrl
    })

   usersCtrl.$inject = ['$scope', 'userService']

    function usersCtrl($scope, userService){
       userService.getUsers()
        .then(response => {
            this.users = response.data;
            console.log(this.users)
        }).catch(error => {
            this.error = 'No Soup For You! Please login'
        })
    }
    
