angular
	.module('app')
    .service('ArticleService', ArticleService)

	function ArticleService($http){
		this.getArticles = function(){
            return $http({
            url : '/api/v1/articles',
            method: 'GET'
        })
    }

        this.deleteArticle = function(id){
            return $http({
            url : '/api/v1/articles/' + id,
            method: 'delete'
        })
    }

        this.putArticle = function(id, data){
            console.log(id)
            console.log('DATA EN SERV ANG', data)
            return $http({
            url : '/api/v1/articles/' + id,
            method: 'PUT',
            data: {
                articles: data
            }
        })
    }

        this.getArticle = function(id){
            return $http({
            url : '/api/v1/articles/' + id,
            method: 'GET',
        })
    }


        
        this.postArticle = function(payload){
            console.log('servicio ang', payload)
            return $http({
            transformRequest: angular.identity,
            headers: {"Content-Type": undefined},
            url : '/api/v1/articles/',
            method: 'POST',
            payload: {
                articles: payload
            }
        })
    }
}

