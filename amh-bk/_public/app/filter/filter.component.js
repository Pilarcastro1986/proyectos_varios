(function(){
    'use strict';
        angular
            .module('filter' , ['ui.bootstrap'])
            .component('filterComponent', {
                bindings: {
                    hotel : '='
                },
                templateUrl : 'app/filter/filter.html',
                controller : filterCtrl
            })

           // ng-annotate agregar a gulp
            
            function filterCtrl($scope){
                (function( $ ){
                    $( document ).ready( function() {
                        $( '.input-range').each(function(){
                            var value = $(this).attr('data-slider-value');
                            var separator = value.indexOf(',');
                            if( separator !== -1 ){
                                value = value.split(',');
                                value.forEach(function(item, i, arr) {
                                    arr[ i ] = parseFloat( item );
                                });
                            } else {
                                value = parseFloat( value );
                            }
                            $( this ).slider({
                                formatter: function(value) {
                                    return '$' + value;
                                },
                                min: parseFloat( $( this ).attr('data-slider-min') ),
                                max: parseFloat( $( this ).attr('data-slider-max') ), 
                                range: $( this ).attr('data-slider-range'),
                                value: value,
                                tooltip_split: $( this ).attr('data-slider-tooltip_split'),
                                tooltip: $( this ).attr('data-slider-tooltip')
                            });
                        });
                        
                     } );
                    } )( jQuery );
                    $scope.oneAtATime = true;
                    $scope.status = {
                        isCustomHeaderOpen: true,
                        isFirstOpen: true,
                        isFirstDisabled: true
                      };
                }



}());