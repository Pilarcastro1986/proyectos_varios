
angular
    .module('app')
    .component('editComponent', {
        bindings: {
        },
        templateUrl: 'app/edit/edit.html',
        controller: editCtrl
    })

editCtrl.$inject = ['$scope', '$routeParams', 'ArticleService', '$location', '$http']

function editCtrl($scope, $routeParams, ArticleService, $location, $http) {
    console.log('routeparamas', $routeParams.id)
    this.isEdit = false;


    this.$onInit = function () {
        if ($routeParams.id != 'new') {
            this.eventId = $routeParams.id;
            this.isEdit = true;

            console.log('scope editar', $routeParams.id)
            ArticleService.getArticle(this.eventId)
                .then(response => {
                    this.viejo = response.data;
                    $scope.producto = this.viejo;
                    console.log(this.viejo)
                })
            this.update = function () {
                const data = $scope.producto
                console.log('file', $scope.producto.productImage)
                ArticleService.putArticle(this.eventId, data)
                    .then(response => {
                        $location.path("/")
                    })
            }

        } else {
            this.isEdit = false;
            this.update = function () {
               
                var payload = new FormData();
                var files = $('#file')[0].files

                for (key in $scope.producto) {
                    payload.append(key, $scope.producto[key])
                    console.log($scope.producto[key])
                }
                if (files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        payload.append('image', file);
                    }
                }

                $http.post('http://localhost:5001/api/v1/articles', payload, {
                    transformRequest: angular.identity,
                    headers: { "Content-Type": undefined },
                }).then(function (response) {
                    $location.path("/")
                })

            }
        }
    }
}


                // ArticleService.postArticle(payload)
                // .then(articulos => {
                //     res.send(articulos)
                //     // this.articles = response.data;
                //     // console.log('art', this.articles)
                // }).catch(error => {
                //     this.error = 'No Soup For You! Please login'
                // })


