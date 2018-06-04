(function(){
    "use strict";

    var userTile = function() {
        return {
            restrict: 'E',
            scope: {
                user: '='
            }, 
            templateUrl: 'app/templates/userTile.html'
        };
    };

    var app = angular.module('app'); 
    app.directive('userTile', userTile);

}());