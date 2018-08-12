angular
	.module('app')
    .component('articleComponent', {
        bindings: {
            articles: '<'
        },
        templateUrl : 'app/articles/articles.html',
        controller : articleCtrl
    })

    articleCtrl.$inject = ['$scope','ArticleService', '$http']

    function articleCtrl($scope, ArticleService, $http, $routeParams, $location){
        console.log('a')
        ArticleService.getArticle()
        .then(response => {
            this.articles = response.data;
            console.log(this.articles)
        }).catch(error => {
            this.error = 'No Soup For You! Please login'
        })

        // this.reload = function(){
        //     ArticleService.getArticle()
        //     .then(response => {
        //         this.articles = response.data;
        //         console.log(this.articles)
        //     }).catch(error => {
        //         this.error = 'No Soup For You! Please login'
        //     })
        // }

        // this.editar = function(id, data){
        //     ArticleService.putArticle(id, data)
        //     .then(this.reload())
        // }

        // this.deleteArticle = function(art) {
        //     ArticleService.deleteArticle(art._id)
        //     .then(this.reload())
        // };
    }
    
