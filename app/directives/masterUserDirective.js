(function(){
    'use strict';

    var masterUsers = function(userListState) {
        return {
            scope: {
                users: '=data'
            },
            templateUrl: 'app/templates/masterUsers.html',
            controller: function($scope) {
                $scope.state = userListState;
                userListState.selectedUser = $scope.users[0];
            }
        };
    };

    var app = angular.module('app');
    app.directive('masterUsers', masterUsers);

}());