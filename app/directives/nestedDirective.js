(function () {
    'use strict';

    var grandParent = function () {
        return {
            scope: true,
            controller: function($scope)
            {
                this.name = 'Grand Parent';
            },
            link: function ($scope, el, attrs) {
                el.data('name', name);                 
            }
        };
    };

    var parent = function () {
        return {
            scope: true,
            require: '^grandParent',
            controller: function($scope)
            {
                this.name = 'Parent';
            },
            link: function ($scope, el, attrs, grandParentCtrl) {
                    el.data('name', name);
                    el.data('master', grandParentCtrl.name);
                    console.log('Parent master is ' + grandParentCtrl.name);
            }
        };
    };

    var child = function () {
        return {
            scope: true,
            //require: '^parent', //'?parent' /'?^parent', /'^^parent',
            require: ['^parent','^grandParent'],
            controller: function($scope)
            {
                this.name = 'Child';
            },
            link: function ($scope, el, attrs, ctrls) {
                if(ctrls[0])
                {                 
                    el.data('master', ctrls[0].name);
                    console.log('Child master is ' + ctrls[0].name);
                    console.log('Child master master is ' + ctrls[1].name);
                } else{
                    console.log('Child does not have a master');
                }
            }
        };
    };

    var app = angular.module('app');
    app.directive('grandParent', grandParent);
    app.directive('parent', parent);
    app.directive('child', child);
}());