(function () {

    var knightPolicy = function ($q) {
       return{
           advanceToKinght: function(person){
               var promise = $q(function(resolve, reject){
                    if(person.yearOfExperience>5){
                        person.rank = 'Jedi Knight';
                        resolve(person);
                    }else{
                        reject(person);
                    }
               });
               return promise;
           }
       };
    };
  
    var app = angular.module('app');
    app.factory('knightPolicy', knightPolicy);
  
  }());