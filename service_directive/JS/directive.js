(function () {
    'use strict';

    angular
        .module('angular_app')
        .directive('myModalDir',function(){
          return {
            restrict: 'E',
            scope: {
              data: '=',
              delete: '&delete'
            },
            template:'<button class="btn btn-link" style="margin-left:90%" ng-click = "delete(data)">X</button>' ,

          };
        })

})();
