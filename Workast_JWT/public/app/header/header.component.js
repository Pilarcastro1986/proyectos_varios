(function(){
    'use strict';
        angular
            .module('headerap')
            .component('headerComponent', {
                bindings: {},
                templateUrl : 'app/header/header.html',
                controller : headerCtrl
            })

            
            function headerCtrl($scope){}
}());