angular
	.module('app')
    .service('searchService', function(){
        const filterContent = null;
        this.setFilterContent = function(filter){
            filterContent = filter;
        }
        this.getFilterContent = function(){
            return filterContent
        }
    })

