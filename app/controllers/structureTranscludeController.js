(function(){
    'use strict';

    var strTransCtrl = function($scope) {
        $scope.items = [1,2,3,4];

        $scope.bountyHunters = [
            {
                name:'Shamim',
                age: 29
            },
            {
                name: 'Yasmin',
                age: 27
            },
            {
                name: 'Moni',
                age: 22
            }
        ];

        $scope.add = function(){
            $scope.bountyHunters.push({name: 'Rasul', age: 30});
        };

        $scope.remove = function(){
            if($scope.bountyHunters.length>0)
                $scope.bountyHunters.length--;
        };
    };

    var app = angular.module('app');
    app.controller('strTransCtrl', strTransCtrl);
}());