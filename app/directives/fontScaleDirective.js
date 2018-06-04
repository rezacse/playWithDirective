(function(){
    "use strict";

    var fontScale = function() {
        return {
            link: function(scope, el, attrs){
                scope.$watch(attrs['fontScale'], function(newVal){
                    el.css('font-size', newVal + '%');
                });    
            }
        };
    };

    var app = angular.module('app'); 
    app.directive('fontScale', fontScale);

}());