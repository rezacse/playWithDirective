(function(){
    "use strict";

    var eventPause = function($parse) {
        return {
            restrict: 'A',
            link: function(scope, el, attrs) {
                var func = $parse(attrs.eventPause);
                el.on('pause', function(event){
                    scope.$apply(function(){
                        func(scope, {evt: event});
                    });
                });
            }
        };
    };

    var app = angular.module("app"); 
    app.directive("eventPause", eventPause);

}());