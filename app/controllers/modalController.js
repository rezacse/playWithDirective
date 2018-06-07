(function(){
    'use strict';

    var modalCtrl = function($scope) {
       $scope.close = function(response){
           $scope.closeModal(response);
       };
    };

    var app = angular.module('app');
    app.controller('modalCtrl', modalCtrl);

}());