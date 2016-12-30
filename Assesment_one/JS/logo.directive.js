(function () {
    'use strict';

    angular
        .module('fieldApp')
        .directive('myLogoDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/logo.directive.html' ,

          };
        })

})();
