(function(){
    'use strict';
        angular
            .module('order')
            .component('orderComponent', {
                bindings: {},
                templateUrl : 'app/orderBy/order.html',
                controller : orderCtrl
            })

            orderCtrl.$inject = ['$scope']
            
            function orderCtrl($scope){
                // $scope.countrys = utilityService.getCountry();
                // console.log($scope.countrys)
            }
}());