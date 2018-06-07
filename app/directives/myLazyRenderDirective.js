(function(){
    'use strict';

    var myLazyRender = function(){
        return{
            restrict: 'A',
            transclude: 'element',
            priority: 1200, // 1000
            link: function(scope, el, attrs, ctrl, transclude) {
                var hasShown = false;
                var unWatchFunc = scope.$watch(attrs.myLazyRender,function(val) {
                   if(!hasShown && val)
                   {
                       hasShown = true;
                       transclude(scope, function(clone){
                           el.after(clone);
                        });
                        unWatchFunc();
                    }
                });
            }
        };
    };

    var echo = function(){
        return {
            restrict: 'A',
            priority: 900,
            link: function() {
                console.log('ECHO');
            }
        };
    };
    var app = angular.module('app');
    app.directive('myLazyRender', myLazyRender);
    
    app.directive('echo', echo);

}());