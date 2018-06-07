(function () {
    "use strict";

    var myQuestion = function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/templates/myQuestion.html',
            scope: {
                questionText: '@q'
            }
        };
    };

    var app = angular.module('app');
    app.directive('myQuestion', myQuestion);

}());