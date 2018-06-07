(function () {

    var userListState = function ($q) {
       return {
           selectedUser: null
       };
    };
  
    var app = angular.module('app');
    app.factory('userListState', userListState);
  
  }());