'use strict';


(function(){
    'use strict';
        angular
            .module('app')
            .config(editConfig)

            editConfig.$inject = ['$routeProvider' ];

            function editConfig($routeProvider) {
                $routeProvider
                .when('/new', {
                    template: '<update-component></update-component>'
                  });
           }
 }());