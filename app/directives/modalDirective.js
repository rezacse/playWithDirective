(function(){
    'use strict';

    var modal = function($document) {
        return {
            scope:{
                modalOpen: '=open',
                options: '=',
                onClose: '&'
            },
            transclude: true,
            templateUrl: 'app/templates/modal.html',
            controller: function($scope) {
                $scope.close = function(){
                    $scope.modalOpen = false;
                    $scope.onClose();
                };

            },
            link: function($scope, el, attrs){

                var options = angular.extend({
                    height: '250px',
                    width: '500px',
                    top: '20%',
                    left: '30%'
                }, $scope.options);

                el.find('.modal-container').css({
                    'left': options.left,
                    'top': options.top,
                    'height': options.height + 'px',
                    'width': options.width + 'px'
                });

                var pageWidth = $document.width();
                var pageHeight = $document.height();
                el.find('.modal-blackout').css({
                    'width': pageWidth + 'px',
                    'height': pageHeight + 'px'
                });
            }
        };
    };
    
    var app = angular.module('app');
    app.directive('modal', modal);

}());