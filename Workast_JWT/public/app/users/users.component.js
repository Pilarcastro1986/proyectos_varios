angular
	.module('app')
    .component('userComponent', {
        bindings: {},
        templateUrl : 'app/users/users.html',
        controller :usersCtrl
    })

   usersCtrl.$inject = ['$scope']

    function usersCtrl($scope){
    //    userService.getUsers()
    //     .then(response => {
    //         this.users = response.data;
    //         console.lof(this.users)
    //     }).catch(error => {
    //         this.error = 'No Soup For You! Please login'
    //     })
    }
    
