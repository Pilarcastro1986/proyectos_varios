
angular
	.module('app')
    .component('editComponent', {
        bindings: {
            articles: '<'
        },
        templateUrl : 'app/edit/edit.html',
        controller : editCtrl
    })

    editCtrl.$inject = ['$scope','$routeParams', 'ArticleService']

    function editCtrl($scope,$routeParams, ArticleService,$location){

            // if(this.nuevo) {
            //     console.log('isedit', this.isEdit);
            //      if(this.isEdit){
            //          console.log('edit?')
            //      } else {
            //         ArticleService.postArticle(x)
            //         .then(function(){
            //             // $location.path("/"),
            //             console.log(x)
            //             console.log('subido')
            //         })
                  
            //      }
            //    } 

        
        
        this.editar = function(id, data){
            ArticleService.putArticle(id, data)
            .then(this.reload())
        }
     }