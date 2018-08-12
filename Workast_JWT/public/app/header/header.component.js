(function(){
    'use strict';
        angular
            .module('app')
            .component('headerComponent', {
                bindings: {},
                templateUrl : 'app/header/header.html',
                controller : headerCtrl
            })

            
            function headerCtrl($scope){}
}());