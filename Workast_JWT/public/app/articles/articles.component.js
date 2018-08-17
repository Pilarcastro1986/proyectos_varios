angular
	.module('app')
    .component('articleComponent', {
        bindings: {
            articles: '<'
        },
        templateUrl : 'app/articles/articles.html',
        controller : articleCtrl
    })

    articleCtrl.$inject = ['ArticleService', '$location']

    function articleCtrl(ArticleService, $location){
        ArticleService.getArticles()
        .then(response => {
            this.articles = response.data;
            console.log(this.articles)
        }).catch(error => {
            this.error = 'No Soup For You! Please login'
        })

        this.reload = function(){
            ArticleService.getArticles()
            .then(response => {
                this.articles = response.data;
                console.log(this.articles)
            }).catch(error => {
                this.error = 'No Soup For You! Please login'
            })
        }

        this.editArticle = function(art) {
            $location.path("/editar/" + art._id);
       };


        this.deleteArticle = function(art) {
            ArticleService.deleteArticle(art._id)
            .then(this.reload())
        };
    }
    
