(function(){
    'use strict';

    var myTransclude = function(){
        return{
            restrict: 'E',
            transclude: 'element',
            link: function(scope, el, attrs, ctrl, transclude) {
                transclude(scope, function(clone){
                    el.after(clone);
                });
            }
        };
    };

    var app = angular.module('app');
    app.directive('myTransclude', myTransclude);

}());