(function(){
  
  var userAddress = function(){
    return {
      restrict: "E",
      templateUrl: "app/templates/userAddress.html",
      scope: true,
      controller: function($scope) {
        $scope.isCollasped = false;
        $scope.toggleAddress = function() {
          $scope.isCollasped = !$scope.isCollasped;
        };
      }
    };
  };
  
  var app = angular.module('app');
  app.directive('userAddress', userAddress);
}());