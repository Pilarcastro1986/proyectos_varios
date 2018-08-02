(function(){
    'use strict';
        angular
            .module('filter' , ['ui.bootstrap', 'rzModule'])
            .component('filterComponent', {
                bindings: {
                    data:'<'
                },
                templateUrl : 'app/filter/filter.html',
                controller : filterCtrl
            })

            function filterCtrl($scope) {
                var vm = this;
                vm.sendEvent = function() {
                    $scope.$parent.$broadcast('msg', vm.message); //el componente emite un evento de tipo 'msg' a través del componente cluster (parent)
                  };

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
                    minValue: 200,
                    maxValue: 300,
                    options: {

                    }
                }
            }



}());