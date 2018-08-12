(function(){
    'use strict';
        angular
            .module('app')
            .component('cluster', {
                bindings: {},
                templateUrl : 'app/cluster/cluster.html',
                controller : clusterCtrl
            })

            
            function clusterCtrl($scope){
                console.log('aaaa')
            }
}());