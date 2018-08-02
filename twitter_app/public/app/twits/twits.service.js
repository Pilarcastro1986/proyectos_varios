angular
	.module('app')
    .service('twitsService', twitsService)

	function twitsService($http){
		this.getTwits = function(){
            return $http({
            url : '/search/topics',
          //  headers: { 'authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjQyNjVlYjNhNWU2Y2Y4OWQ0MjUzYjIiLCJpYXQiOjE1MzEwNzgxMjMsImV4cCI6MTUzMjI4NzcyM30.YSnsLGWQI2RyW13yMym03lULCf3CE1l6JOMMcKJ7FAc' },
            method: 'GET'
        })
    }
}