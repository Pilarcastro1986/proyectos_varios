angular
	.module('app')
    .service('ArticleService', ArticleService)

	function ArticleService($http){
		this.getArticle = function(){
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
            return $http({
            url : '/api/v1/articles/' + id,
            method: 'PUT',
            data: {
                articles: data
            }
        })
    }

    // this.postArticle = function postArticle(data) {
    //     return $http({
    //         method: "post",
    //         url: "/api/v1/articles/",
    //         params: {
    //             action: "add"
    //         },
    //         data: {
    //             articles: data
    //         }
    //     });
    // }
        
    //     this.postArticle = function(data){
    //         console.log('dataa', data)
    //         return $http({
    //         url : '/api/v1/articles/',
    //         method: 'POST',
    //         params: {
    //             action: "add"
    //         },
    //         data: {
    //             articles: data
    //         }
    //     })
    // }
}

