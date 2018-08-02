angular
	.module('articles')
    .component('articleComponent', {
        bindings: {
            articles: '<'
        },
        templateUrl : 'app/articles/articles.html',
        controller : articleCtrl
    })

    articleCtrl.$inject = ['$scope']

    function articleCtrl($scope){
        // ArticleService.getArticle()
        // .then(response => {
        //     this.articles = response.data;
        //     console.log(this.articles)
        // }).catch(error => {
        //     this.error = 'No Soup For You! Please login'
        // })
    }
    
