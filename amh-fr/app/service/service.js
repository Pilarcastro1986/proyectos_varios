(function(){
    'use strict';
        angular
            .module('app', [])
            .service('utilityService', utilityService)
            
            function utilityService($scope){
                var countrys = [
                    {name: 'usA'},
                    {name:'Argentina'}
                ];
                return {
                    getCountry : function(){
                        return countrys;
                    }
                }

            }
}());