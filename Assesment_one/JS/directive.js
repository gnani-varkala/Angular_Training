
(function () {
    'use strict';

    angular
        .module('fieldApp')
        .directive('myNavDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/directive.html' ,

          };
        })

})();
