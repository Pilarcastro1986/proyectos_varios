(function(){
    'use strict';
        angular
            .module('cluster')
            .component('cluster', {
                bindings: {
                    hotel : '='
                },
                templateUrl : 'app/cluster/cluster.html',
                controller : clusterCtrl
            })

            
            function clusterCtrl($scope){}
}());