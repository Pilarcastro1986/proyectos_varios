(function(){
    'use strict';
        angular
            .module('app', ['cluster'])
            .service('utilityService', ['utilityService', function (utilityService) {
                var countrys = [
                    {name: 'usA'},
                    {name:'Argentina'}
                ];
                return {
                    getCountry : function(){
                        return countrys;
                    }
                }
            }])

            //.config(appConfig);

           // appConfig.$inject = ['$locationProvider', '$routeProvider'];
  
            // function appConfig($locationProvider) {
            //     $locationProvider.html5Mode({
            //     enabled: true,
            //     requireBase: false
            //     }).hashPrefix('!');
            // }
        }());