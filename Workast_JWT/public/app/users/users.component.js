angular
	.module('app')
    .component('userComponent', {
        bindings: {},
        templateUrl : 'app/users/users.html',
        controller :usersCtrl
    })

   usersCtrl.$inject = ['$scope', 'userService', '$window', '$sessionStorage', '$location']
    function usersCtrl($scope, userService, $window, $sessionStorage, $location){
        this.showError = false;
        // this.save = function(){
        //     $sessionStorage.email = this.email;
        // }


        this.singIn = function(){

            const data = this.email
            console.log('component', data)

            userService.getUsers(data)
            .then(response => {
               this.user = response.data
               console.log('response', this.user)
               $location.path("/");
               //this.token = response.data.token;
            //    console.log(this.token)

            }).catch(error => {
                this.showError = true;
                console.log('Error:', error)
            })
        }
    }
    

    
