'use strict';

var dir = angular.module('Directives', []);

dir.directive('linkFinal', [function () {
    return {
        restrict: 'E',
        scope: {
            android: "=",
            apple: "="
        },
        link: function(scope, elem, attr){

            scope.copiar = function(){

                var copyTextarea = document.querySelector('.url');
                copyTextarea.select();
                var successful = document.execCommand('copy');

                if (successful) {
                    alert(' URL COPIADA! ');
                }
                

            }

        },
        template: '<input class="url" value="http://rbvradios.com.br/bolorama/redirect.html?android={{android}}&apple={{apple}}" type="text" /><button class="button" ng-click="copiar();"> Copiar </button>'
    };
}]);