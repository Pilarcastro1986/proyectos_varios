angular
	.module('app')
    .component('articleComponent', {
        bindings: {
            articles: '<'
        },
        templateUrl : 'app/articles/articles.html',
        controller : articleCtrl
    })

    articleCtrl.$inject = ['ArticleService', '$location', 'jwtService']

    function articleCtrl(ArticleService, $location, jwtService){

       
        this.algo =  jwtService.read()
        

        ArticleService.getArticles()
        .then(response => {
            this.articles = response.data;
            console.log('art', this.articles)
        }).catch(error => {
            this.error = 'No Soup For You! Please login'
        })

        this.reload = function(){
            ArticleService.getArticles()
            .then(response => {
                this.articles = response.data;
                console.log(this.articles)
            }).catch(error => {
                this.error = 'No Soup For You! Please login'
            })
        }

        this.nuevoProducto = function() {
            $location.path("/editar/new");
       };

        this.editArticle = function(art) {
            $location.path("/editar/" + art._id);
        };


       this.ordenarPor = function(orden) {
        //    console.log('orden')
        // this.ordenSeleccionado = orden;
      };

        this.deleteArticle = function(art) {
            ArticleService.deleteArticle(art._id)
            .then(this.reload())
        };
    }
    
