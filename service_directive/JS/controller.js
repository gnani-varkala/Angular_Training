var app = angular.module("angular_app",[]);

app.controller('jsonCtrl',['$scope','jsonService',function($scope,jsonService){
  $scope.jsonDetails =[];
  $scope.callBack = function(data){
      $scope.jsonDetails = data;
  }
  jsonService.myJson('JSON/id.json',$scope.callBack);
  $scope.delete = function(data){
      console.log(data);
        $scope.jsonDetails.splice(data,1);

  }

}]);


app.controller('addressCtrl',['$scope','jsonService',function($scope,jsonService){
  $scope.addressJSON=[];
  $scope.callBack = function(data){
      $scope.addressJSON = data;
  }
  jsonService.myJson('JSON/address.json',$scope.callBack);

  $scope.delete = function(data){
      console.log(data);
        $scope.addressJSON.splice(data,1);

  }

}]);
