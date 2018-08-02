angular
	.module('app')
    .service('hotelService', hotelService)

    hotelService.$inject = ['$http']

    
	function hotelService($http){
		this.getHotels = function(){
            return $http({
            url : '/api/v1/hotels',
            method: 'GET'
        })
    }
}