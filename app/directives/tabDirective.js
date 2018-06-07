(function(){
  
    var swTabstrip = function(){
      return {
        restrict: "E",
        transclude: true,
        scope: {},
        controller: function($scope) {
          $scope.panes = [];
          $scope.select = function(pane) {
              pane.isSelected = true;
              $scope.panes.forEach(function(cPane) {
                  if(cPane !== pane) {
                      cPane.isSelected = false;
                  }                  
              });
          };

          this.addPane = function(pane) {
            $scope.panes.push(pane);
            if($scope.panes.length === 1) {
                pane.isSelected = true;
            }
          };
        },
        templateUrl: "app/templates/swTabstrip.html"
      };
    };

    var swPane = function() {
        return {
          restrict: "E",
          transclude: true,
          scope: {
              title: '@'
          },
          require: '^swTabstrip',
          link: function(scope, el, attrs, tabstripCtrl) {
            tabstripCtrl.addPane(scope);
          },
          templateUrl: "app/templates/tabPane.html"
        };
      };
    
    var app = angular.module('app');
    app.directive('swTabstrip', swTabstrip);
    app.directive('swPane', swPane);
  }());