(function(){
  
  var removeFriend = function(){
    return {
      restrict: "E",
      templateUrl: "app/templates/removeFriend.html",
      scope: {
        notifyParent: '&method'
      },
      controller: function($scope) {
        $scope.removing = false;
        
        $scope.startRemove = function() {
          $scope.removing = true;
        };
        
        $scope.cancelRemove = function() {
          $scope.removing = false;
        };
        
        $scope.confirmRemove = function(friend) {
          //$scope.notifyParent({friend: 'Sohid', parm : 'Boss'});
          $scope.notifyParent();
        };
      }
    };
  };
  
  var app = angular.module('app');
  app.directive('removeFriend', removeFriend);
}());