(function(){
    'use strict';
        angular
            .module('app')
            .component('headerComponent', {
                bindings: {},
                templateUrl : 'app/header/header.html',
                controller : headerCtrl
            })

            headerCtrl.$inject = ['$location']

            function headerCtrl($scope,  $location){
            }
}());