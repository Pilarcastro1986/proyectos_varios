(function(){
    'use strict';
        angular
            .module('filter' , ['ui.bootstrap', 'rzModule', 'result', 'order'])
            .component('filterComponent', {
                bindings: {
                    data:'<',
                },
                templateUrl : 'app/filter/filter.html',
                controller : filterCtrl
            })

            function filterCtrl($scope) {
                // var vm = this;
                // vm.sendEvent = function() {
                //     $scope.$parent.$broadcast('msg', vm.message); //el componente emite un evento de tipo 'msg' a través del componente cluster (parent)
                //   };


                this.hotels = 'aaaaa';  // por que no funciona con scope?

                // this.searchHotel = function searchHotel(hotel){
                //     const h = hotel
                //     console.log('h', hotel)
                // }

                $scope.oneAtATime = true;
                    
                $scope.status = {
                    searchHotels: true,
                    searchPrice: true,
                    searchStars: true
                };

                $scope.statusResponsive = {
                    searchHotels: false,
                    searchPrice: false,
                    searchStars: false,
                    seeMap: false
                };
                
                $scope.priceSlider = {
                    minValue: 0,
                    maxValue: 2000,
                }

                // vm.filterFn = function()
                // {
                //     return function(item){
                //           return item['age'] >= vm.priceSlider1.value;
                //     }
                // };
            }



}());