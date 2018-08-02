(function(){
    'use strict';
        angular
            .module('result')
            .component('resultComponent', {
                bindings: {
                    data: '<',
                    filters: '<'
                },
                templateUrl : 'app/result/result.html',
                controller : resultCtrl
            })

            resultCtrl.$inject = ['$scope', 'hotelService']

            function resultCtrl($scope, hotelService) {
                var vm = this;
                $scope.$on('msg', function(evt, msg){ // El componente  está escuchando los eventos 'msg', y al recibirlos ejecuta su función de callback.
                  vm.data = msg;
                });

                $scope.hoteles = [
                    {
                        nombre:'HILTON', 
                        precio: 98
                    },
                    {
                        nombre:'SHERATON', 
                        precio: 100
                    },
                    {
                        nombre:'NH', 
                        precio: 12000
                    }];

                

                var _this = this;
            
                hotelService.getHotels().then(function (response) {
                    _this.hotels = response.data;
                    console.log(_this.hotels);
                }).catch(function (error) {
                    _this.error = 'No Soup For You! Please login';
                });
            }

            // function resultCtrl($scope, hotelService){
            //     hotelService.getHotels()
            //     .then(response => {
            //         this.hotels = response.data;
            //         console.log(this.hotels)
            //     }).catch(error => {
            //         this.error = 'No Soup For You! Please login'
            //     })

            //     $scope.getStar = function(hotel){
            //         return new Array(Number(hotel.stars));
            //     }

            // }
}());