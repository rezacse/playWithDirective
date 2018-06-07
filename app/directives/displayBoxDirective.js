(function(){
  
    var displayBox = function(){
      return {
        restrict: "E",
        transclude: true,
        scope: true,
        templateUrl: "app/templates/displayBox.html",
        controller: function($scope) {
          $scope.hidden = false;
          
          $scope.close = function() {
            $scope.hidden = true;
          }; 
          $scope.message ="This is from directive";         
        }        
      };
    };
    
    var app = angular.module('app');
    app.directive('displayBox', displayBox);
  }());