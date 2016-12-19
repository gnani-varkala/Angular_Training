(function(){
  'use strict';
  angular.module('iterateApp',[]);
})();

(function () {
    'use strict';

    angular
        .module('iterateApp')
        .controller('iterate', iterate);

    iterate.$inject = ['$scope'];
    function iterate($scope){
      $scope.myNumber ;
      $scope.myDiv = function(){
        $scope.mainArray = [];
        var count = 1;
        for(var i=0;i<($scope.myNumber*5) ;i++){
          $scope.mainArray.push(count++);
        }
      }

    };
})();
