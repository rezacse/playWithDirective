(function(){
  
    var droidInfoCard = function(){
      return {
        templateUrl: "app/templates/droidInfoCard.html",
        restrict: "E",
        scope: {
            droid: '=',
            initialCollapsed: '@collapsed'
        }
      };
    };
    
    var app = angular.module('app');
    app.directive('droidInfoCard', droidInfoCard);
  
  }());