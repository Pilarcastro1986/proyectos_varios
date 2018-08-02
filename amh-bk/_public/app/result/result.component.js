(function(){
    'use strict';
        angular
            .module('result')
            .component('resultComponent', {
                bindings: {
                    hotel: '='
                },
                templateUrl : 'app/result/result.html',
                controller : resultCtrl
            })
            // .filter('hotelesfilter', function(hotel){
            //     hotel.name.startsWith("P");
            // })

            resultCtrl.$inject = ['$scope', 'hotelService']

            function resultCtrl($scope, hotelService, searchService){

                hotelService.getHotels()
                .then(response => {
                    this.hotels = response.data;
                    console.log('hoteles',this.hotels)
                }).catch(error => {
                    this.error = 'No Soup For You! Please login'
                })

               // $scope.hotel = 
            }
}());