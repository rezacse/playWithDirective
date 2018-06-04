(function(){
    "use strict";

    var userClickSelect = function() {
        return {
            link: function(scope, el, attrs) {                
                el.on('click', function(){
                    scope.user.selected = !scope.user.selected;
                    scope.$apply();
                });
            }
        };
    };

    var app = angular.module('app'); 
    app.directive('userClickSelect', userClickSelect);

}());