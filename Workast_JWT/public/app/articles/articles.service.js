angular
	.module('app')
    .service('ArticleService', ArticleService)

	function ArticleService($http){
		this.getArticle = function(){
            return $http({
            url : '/api/v1/articles',
            headers: { 'authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjQyNjVlYjNhNWU2Y2Y4OWQ0MjUzYjIiLCJpYXQiOjE1MzEwNzgxMjMsImV4cCI6MTUzMjI4NzcyM30.YSnsLGWQI2RyW13yMym03lULCf3CE1l6JOMMcKJ7FAc' },
            method: 'GET'
        })
    }
}