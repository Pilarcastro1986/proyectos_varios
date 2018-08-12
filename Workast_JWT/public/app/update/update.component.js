angular
    .module('app')
    .component('updateComponent', {
        bindings: {
            articles: '<'
        },
        templateUrl: 'app/update/update.html',
        controller: updateCtrl
    })

updateCtrl.$inject = ['$scope', 'ArticleService', '$routeParams', '$location']

function updateCtrl($scope, ArticleService, $routeParams, $location) {
    console.log($routeParams)

    this.update = function () {
        ArticleService.postArticle($scope.producto)
            .then(function () {
                $location.path("/");
            })
        }
    this.back = function(){
        $location.path("/");
    }
}