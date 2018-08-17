
angular
	.module('app')
    .component('editComponent', {
        bindings: {
        },
        templateUrl : 'app/edit/edit.html',
        controller : editCtrl
    })

    editCtrl.$inject = ['$scope','$routeParams', 'ArticleService', '$location', '$http']

    function editCtrl($scope,$routeParams, ArticleService,$location, $http){
        console.log('routeparamas', $routeParams.id)


        this.$onInit = function(){
            if($routeParams.id != 'new'){
                // this.eventId = $routeParams.id;
                // console.log('scope editar', $routeParams.id)
                // ArticleService.getArticle(this.eventId)
                //     .then(response => {
                //         this.nuevo = response.data;
                //         $scope.producto = this.nuevo;
                //         console.log(this.nuevo)
                //     })       

            }else {

                $scope.producto = {};

                this.update = function(){


                    const formData = new FormData();

                    for(key in $scope.producto){
                        formData.append(key, $scope.producto[key])
                        console.log($scope.producto[key])
                    }

                    var file = $('#file')[0].files[0];
                    console.log(file)
                    formData.append('image', file)

                    // ArticleService.postArticle(formData)
                    // console.log('componente', formData)
                    //     .then(function (response) {
                    //         console.log(response)
                    //         // $location.path("/")
                    //     })

                    $http.post('/api/v1/articles/', formData, {
                        transformRequest: angular.identity,
                        headers: {"Content-Type": undefined},
                    }).then(function (response) {
                        console.log(response)
                        // $location.path("/")
                    })
                }
            }
        }
    }




                

            // this.update = function(){
            //     if($routeParams.id === 'new'){
            //         this.eventId = $routeParams.id;
            //         console.log('scope editar', $routeParams.id)
            //         ArticleService.getArticle(this.eventId)
            //             .then(response => {
            //                 this.nuevo = response.data;
            //                 $scope.producto = this.nuevo;
            //                 console.log(this.nuevo)
            //             })       
            //         }
            //         else {
            //         console.log('nuevo articulo', $scope.producto)
            //         ArticleService.putArticle($scope.producto)
            //         .then(function () {
            //             $location.path("/")
            //         })
            //     }
            // } 
        
        // this.update = function(){
        //     console.log('entra')
        //     if($routeParams.id == 'new'){
        //         console.log('nuevo articulo', $scope.producto)
        //         console.log($scope.producto.imagen)
        //         ArticleService.postArticle($scope.producto)
        //             .then(function () {
        //                 console.log('subio')
        //             })
        //         } else {
        //             console.log('scope editar', $routeParams.id)
        //             this.eventId = $routeParams.id;
                        
        //                 ArticleService.getArticle(this.eventId)
        //                 .then(response => {
        //                     this.nuevo = response.data;
        //                     $scope.producto = this.nuevo;
        //                     console.log(this.nuevo)
        //                 })
        //             }
        //         }
            
                
            
        
