(function(){
  

var mainController = function($scope){
  $scope.user = {
    name: 'Shamim Reza',
    selected: true,
    address:{
      street: 'Footpath',
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    friends:[
      'Moni',
      'Rosul',
      'Sohid'
      ]
  };
  
};

mainController.$inject = ['$scope'];

var app = angular.module('app');
app.controller('mainCtrl', mainController);

}());
