(function(){
    'use strict';
        angular
            .module('cluster')
            .component('cluster', {
                bindings: {
                    // filters:'@'
                   
                },
                transclude	:	true,
                templateUrl : 'app/cluster/cluster.html',
                controller : clusterCtrl
            })
            

            
            function clusterCtrl($scope){
               this.data = 'No Soup For You! Please login';
            //    this.filters = 'HOLA SOY UN FILTRO'
            var vm = this;
              vm.data = 'Nothing here...';
                vm.sendEvent = function() {
                vm.data = vm.message;
                console.log(vm.data)
                };
            }
}());