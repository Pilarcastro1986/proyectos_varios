angular
	.module('app')
    .component('userComponent', {
        bindings: {},
        templateUrl : 'app/users/users.html',
        controller :usersCtrl
    })

   usersCtrl.$inject = ['$scope', 'userService', '$window', '$sessionStorage', '$location', 'jwtService']
    function usersCtrl($scope, userService, $window, $sessionStorage, $location, jwtService){
        this.showError = false;
        // this.save = function(){
        //     $sessionStorage.email = this.email;
        // }


        this.singIn = function(){

            const data = this.email
            console.log('component', data)

            userService.getUsers(data)
            .then(response => {
              
                if(response.data.token){
                    jwtService.save(response.data.token)
                    console.log(response)
                    $location.path('/')
                }
            //    this.user = response.data
            //    console.log('response', this.user)
            //    userService.getPrivate()
                // .then(response => {
                //     this.ok = response.data
                //     console.log(this.ok)
                // }).catch(error => {
                //     console.log('error', error)
                // })
               
               ///api/v1/private
               //this.token = response.data.token;
            //    console.log(this.token)

            }).catch(error => {
                this.showError = true;
                console.log('Error:', error)
            })
        }
    }
    

    
