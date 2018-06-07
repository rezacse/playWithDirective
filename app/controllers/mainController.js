(function () {


  var mainController = function ($scope) {
    $scope.person = {
      name: 'Shamim Reza',
      selected: true,
      level: 0,
      yearOfExperience: 2,
      address: {
        street: 'Footpath',
        city: 'Dhaka',
        country: 'Bangladesh'
      },
      friends: [
        'Moni',
        'Rosul',
        'Sohid'
      ]
    };

    $scope.person1 = {
      name: 'Sabina Yasmin',
      selected: true,
      level: 1,
      yearOfExperience: 6,
      address: {
        street: 'Footpath',
        city: 'Dhaka',
        country: 'Bangladesh'
      },
      friends: [
        'Moni',
        'Rosul',
        'Sohid'
      ]
    };

    $scope.droid = {
      name: 'Droid',
      selected: true,
      level: 1,
      specifications: {
        type: 'Known',
        quality: 'Good'
      }
    };

    $scope.openModal = function(){
      $scope.modalOpen = true;
    };

    $scope.closedModal = function(){
      $scope.closeModal('no');
    };

    $scope.closeModal = function(response){
      $scope.modalOpen = false;
      console.log('Modal Closed', response);
  };

  
  };

  var app = angular.module('app');
  app.controller('mainCtrl', mainController);

}());
