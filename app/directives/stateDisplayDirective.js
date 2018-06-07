(function () {
    "use strict";

    var stateDisplay = function () {
        return {
            link: function (scope, el, attrs) {
                var params = attrs.stateDisplay.split(' ');
                var linkVar = params[0];
                var classes = params.splice(1);

                scope.$watch(linkVar, function(newVal){
                    el.removeClass(classes.join(' '));
                    el.addClass(classes[newVal]);
                });                
            }
        };
    };

    var app = angular.module('app');
    app.directive('stateDisplay', stateDisplay);

}());