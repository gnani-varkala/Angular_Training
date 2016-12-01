(function(){
  'use strict';
  angular.module('angular_app',[]);
})();

(function () {
    'use strict';

    angular
        .module('angular_app')
        .controller('jsonCtrl', jsonCtrl);

    jsonCtrl.$inject = ['$scope','jsonService'];
    function jsonCtrl($scope,jsonService){
      $scope.jsonDetails =[];
      $scope.callBack = function(data){
          $scope.jsonDetails = data;
      }
      jsonService.myJson('JSON/id.json',$scope.callBack);
      $scope.delete = function(data){
            $scope.jsonDetails.splice(data,1);

      }
    }
})();

(function () {
    'use strict';

    angular
        .module('angular_app')
        .controller('addressCtrl', addressCtrl);

    addressCtrl.$inject = ['$scope','jsonService'];
    function addressCtrl($scope,jsonService){
      $scope.addressJSON =[];
      $scope.callBack = function(data){
          $scope.addressJSON = data;
      }
      jsonService.myJson('JSON/address.json',$scope.callBack);
      $scope.delete = function(data){
            $scope.addressJSON.splice(data,1);

      }
    }

})();
