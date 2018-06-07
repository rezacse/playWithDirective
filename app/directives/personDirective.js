(function(){
  
  var personInfoCard = function(knightPolicy){
    return {
      restrict: "E",
      templateUrl: "app/templates/personInfoCard.html",
      scope: {
        person: '=',
        initialCollapsed: '@collapsed'
      },
      controller: function($scope) {
        $scope.knigthMe = function(person) {
          $scope.showKnightModal = true;          
        };

        $scope.knightDialogDone = function(response) {
          $scope.showKnightModal = false;
          if(response) {
            knightPolicy.advanceToKinght(response)
            .then(null, function() {
              alert('Sorry, '+ response.name + 'is not ready to advance');
            });
          }
        };
                
        $scope.removeFriend = function(friend) {
          var idx = $scope.person.friends.indexOf(friend);
          if(idx>-1)
          {
            $scope.person.friends.splice(idx,1);
          }
        };
      }
    };
  };
  
  var app = angular.module('app');
  app.directive('personInfoCard', personInfoCard);

}());