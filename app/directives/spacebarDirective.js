(function(){
    "use strict";

    var spacebarSupport = function() {
        return {
            restrict: 'A',
            link: function(scope, el, attrs){
                $('body').on('keypress', function(evt){
                    var videoElm = el[0];
                    if(evt.keyCode !== 32)
                        return;
                                            
                    if(videoElm.paused){
                        videoElm.play();
                    }else{
                        videoElm.pause();
                    }
                });
            }
        };
    };

    var app = angular.module("app"); 
    app.directive("spacebarSupport", spacebarSupport);

}());