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
      jsonService.myJson('JSON/example.json').then(function(data){
        $scope.jsonDetails = data;
      });

      $scope.selectedRow = null;
    $scope.setClickedRow = function(index){  
       $scope.selectedRow = index;
    }

      $scope.color1 = function(e){
        var x = event.target;
        console.log(x);
        $scope.select1 = {select:true};
          $scope.select2="";
          $scope.select3="";
          $scope.select4="";
      }
      $scope.color2 = function(){
        $scope.select2 = {select:true};
        $scope.select1="";
        $scope.select3="";
        $scope.select4="";
      }
      $scope.color3 = function(){
        $scope.select3 = {select:true};
        $scope.select1="";
        $scope.select2="";
        $scope.select4="";
      }
      $scope.color4 = function(){
        $scope.select4 = {select:true};
        $scope.select1="";
        $scope.select2="";
        $scope.select3="";
      }
    }
})();
