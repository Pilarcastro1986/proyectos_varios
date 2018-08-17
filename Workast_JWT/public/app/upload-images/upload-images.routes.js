'use strict';


(function(){
    'use strict';
        angular
            .module('app')
            .config(editConfig)

            editConfig.$inject = ['$routeProvider' ];

            function editConfig($routeProvider) {
                $routeProvider
                .when('/upload-images', {
                    template: '<upload-images-component></upload-images-component>'
                  });
           }
 }());