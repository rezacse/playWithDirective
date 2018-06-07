(function(){
    'use strict';

    var comDirCtrl = function($scope) {
        $scope.users = [
            {
                name: 'Rosul',
                planet: 'Soudi Arabic',
                job: 'Introduce Islam'
            },{
                name: 'Musa',
                planet: 'Misor',
                job: 'Teach Feraun'
            }, {
                name: 'Adam',
                planet: 'World',
                job: 'Produce People'
            }
        ];
    };

    var app = angular.module('app');
    app.controller('comDirCtrl', comDirCtrl);

}());