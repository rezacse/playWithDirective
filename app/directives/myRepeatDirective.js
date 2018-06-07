
(function(){
    'use strict';

    var userList = function($compile){
        return{
            restrict: 'A',
            transclude: 'element',
            link: function(scope, el, attrs, ctrl, transclude) {
                var attrValues = attrs.userList.split(' ');
                var user = attrValues[0];
                var users = attrValues[2];
                var newUsers = [];

                scope.$watchCollection(users, function(collection){
                    if(newUsers.length>0){
                        for(var i=0;i<newUsers.length;i++){
                            newUsers[i].el.remove();
                            newUsers[i].scope.$destroy();
                        }
                        newUsers = [];
                    }

                    for(var j=0;j<collection.length;j++){
                        var childScope = scope.$new();
                        childScope[user] = collection[j];
                        transclude(childScope, function(clone){
                            var template = $compile('<div class="panel panel-primary"><div class="panel-heading">{{'+user+'.name}}</div><div class="panel-body" /></div>');
                            var wrapper = template(childScope);
                            wrapper.find(".panel-body").append(clone);
                            
                            el.before(wrapper);
                            var item = {};
                            item.el = wrapper;
                            item.scope = childScope;
                            newUsers.push(item);
                        });
                    }
                });

                
            }
        };
    };

    var app = angular.module('app');
    app.directive('userList', userList);    

}());