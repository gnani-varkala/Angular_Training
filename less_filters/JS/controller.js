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
      $scope.select1 = {select:false};
      $scope.select2 = {select:false};
      $scope.select3 = {select:false};
      $scope.select4 = {select:false};

      $scope.selectedRow = null;  // initialize our variable to null
      $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
         $scope.selectedRow = index;
      }

      $scope.color1 = function(e){
        var x = event.target;
        console.log(x);
        $scope.select1.select = !$scope.select1.select;
      }
      $scope.color2 = function(){
        var x = event.target;
        console.log(x);
        $scope.select2.select = !$scope.select2.select;
      }
      $scope.color3 = function(){
        var x = event.target;
        console.log(x);
        $scope.select3.select = !$scope.select3.select;
      }
      $scope.color4 = function(){
        var x = event.target;
        console.log(x);
        $scope.select4.select = !$scope.select4.select;
      }
    }
})();
