(function(){
  'use strict';
  angular.module('boxApp',[]);
})();

(function () {
    'use strict';

    angular
        .module('boxApp')
        .controller('boxExample', boxExample);

    boxExample.$inject = ['$scope'];
    function boxExample($scope){
      $scope.x = "";
      $scope.result="";
      var flag="";
      $scope.enter = function(event){
        $('.row .col-md-2').removeClass('new-color');
        var selected= event.target;
         $scope.x = $(selected).text();
        $scope.x=($scope.x).trim();
        $('#'+$scope.x).addClass("new-color");
      }

    };

})();
