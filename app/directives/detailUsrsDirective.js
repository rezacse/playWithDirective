(function(){
    'use strict';

    var detailUsers = function(userListState) {
        return {
            scope: {
                users: '=data'
            },
            templateUrl: 'app/templates/detailUsers.html',
            controller: function($scope) {
                $scope.state = userListState;
            }
        };
    };

    var app = angular.module('app');
    app.directive('detailUsers', detailUsers);

}());