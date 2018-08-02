angular
	.module('app')
    .component('twitsComponent', {
        bindings: {
        },
        templateUrl : 'app/twits/twits.html',
        controller : twitsCtrl
    })

    twitsCtrl.$inject = ['$scope', 'twitsService']

    function twitsCtrl($scope, twitsService){
        twitsService.getTwits()
        .then(response => {
            this.twits = response.data;
        }).catch(error => {
            this.error = 'No Soup For You! Please login'
        })
    }
    
