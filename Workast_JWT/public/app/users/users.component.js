angular
	.module('app')
    .component('userComponent', {
        bindings: {},
        templateUrl : 'app/users/users.html',
        controller :usersCtrl
    })

   usersCtrl.$inject = ['$scope']

    function usersCtrl($scope){
       
    }
    
