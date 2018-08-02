(function(){
    'use strict';
        angular
            .module('order')
            .component('orderComponent', {
                bindings: {},
                templateUrl : 'app/orderBy/order.html',
                controller : orderCtrl
            })

            
            function orderCtrl($scope){}
}());