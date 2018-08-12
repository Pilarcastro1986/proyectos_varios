
(function(){
    'use strict';
        angular
            .module('app')
            .config(editConfig)

            editConfig.$inject = ['$routeProvider' ];

            function editConfig($routeProvider) {
                $routeProvider
                .when('/', {
                    template: '<article-component></article-component>'
                  });
           }
 }());