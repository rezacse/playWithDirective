(function () {

    var transcludeCtrl = function ($scope) {
        $scope.message = "This is from controller";

        $scope.answers = {
            baseLocation:"inside Controller",
        };
    };
    
    var app = angular.module('app');
    app.controller('transcludeCtrl', transcludeCtrl);
  
  }());
  