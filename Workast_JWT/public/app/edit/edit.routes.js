'use strict';


(function(){
    'use strict';
        angular
            .module('app')
            .config(editConfig)

            editConfig.$inject = ['$routeProvider' ];

            function editConfig($routeProvider) {
                $routeProvider
                .when('/editar/:id', {
                    template: '<edit-component></edit-component>'
                  });
           }
 }());