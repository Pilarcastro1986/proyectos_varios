'use strict';


(function(){
    'use strict';
        angular
            .module('app')
            .config(editConfig)

            editConfig.$inject = ['$routeProvider' ];

            function editConfig($routeProvider) {
                $routeProvider
                .when('/users', {
                    template: '<user-component></user-component>'
                  });
           }
 }());