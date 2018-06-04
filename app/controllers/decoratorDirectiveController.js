(function () {

  var decoratorDirectiveController = function ($scope) {

    $scope.handlePause = function (e) {
      console.log("Paused Occurr!!");
    };

    $scope.data = { message: "I have not been clicked"};
    $scope.clickHandler = function (p) {
      p.message = "I have been clicked";
    };

    $scope.user = {
      name: 'Shamim',
      selected: true
    };

    $scope.size = 150;
  };
  
  var app = angular.module('app');
  app.controller('decoratorCtrl', decoratorDirectiveController);

}());