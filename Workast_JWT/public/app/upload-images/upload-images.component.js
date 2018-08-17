angular
	.module('app')
    .component('uploadImagesComponent', {
        bindings: {
            uploadimagess: '<'
        },
        templateUrl : 'app/upload-images/upload-images.html',
        controller : uploadimagesCtrl
    })

    uploadimagesCtrl.$inject = ['$location']

    function uploadimagesCtrl($location){
        
    }
    
