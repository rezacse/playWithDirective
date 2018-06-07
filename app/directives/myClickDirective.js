(function(){
    "use strict";

    var myClick = function($parse) {
        return {
            link: function(scope, el, attrs){
                var func = $parse(attrs.myClick);
                el.on('click', function(){
                    scope.$apply(function(){
                        func(scope);
                    });
                });
            }
        };
    };

    var app = angular.module("app"); 
    app.directive("myClick", myClick);

}());