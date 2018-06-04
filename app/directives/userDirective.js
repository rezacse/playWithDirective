(function(){
  
  var userInfoCard = function(){
    return {
      templateUrl: "app/templates/userInfoCard.html",
      restrict: "E",
      scope: {
        user: '=',
        initialCollasped: '@isCollasped'
      },
      controller: function($scope) {
        $scope.isCollasped = ($scope.initialCollasped==='true');
        $scope.knigthMe = function(user) {
          user.rank = "1";
        };
        
        $scope.togglePanel = function() {
          $scope.isCollasped = !$scope.isCollasped;
        };
        
         $scope.removeFriend = function(friend) {
          var idx = $scope.user.friends.indexOf(friend);
          if(idx>-1)
          {
            $scope.user.friends.splice(idx,1);
          }
        };
      }
    };
  };
  
  var app = angular.module('app');
  app.directive('userInfoCard', userInfoCard);
}());