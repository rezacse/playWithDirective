(function () {
    'use strict';

    var userPanel = function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/templates/userPanel.html',
            scope: {
                name: '@',
                level: '=',
                initialCollapsed: '@collapsed'
            },
            controller: function ($scope) {
                $scope.isCollapsed = ($scope.initialCollapsed === 'true');

                $scope.togglePanel = function () {
                    $scope.isCollapsed = !$scope.isCollapsed;
                };

                $scope.nextState = function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    $scope.level++;
                    $scope.level = $scope.level % 4;
                };
            }

        };
    };

    var app = angular.module('app');
    app.directive('userPanel', userPanel);
}());