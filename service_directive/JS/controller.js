var app = angular.module("angular_app",[]);

app.controller('jsonCtrl',['$scope','jsonService',function($scope,jsonService){
  $scope.jsonDetails =[];
  $scope.callBack = function(data){
      $scope.jsonDetails = data;
  }
  jsonService.myJson('JSON/id.json',$scope.callBack);

  $scope.select = function(user){
    $scope.modalData = user;
  }
  $scope.delete = function(data){
    for(var i=0;i<$scope.jsonDetails.length;i++){
      if(data.name == $scope.jsonDetails[i].name ){
        $scope.jsonDetails.splice(i,1);
      }
    }
  }

}]);


app.controller('addressCtrl',['$scope','jsonService',function($scope,jsonService){
  $scope.addressJSON=[];
  $scope.callBack = function(data){
      $scope.addressJSON = data;
  }
  jsonService.myJson('JSON/address.json',$scope.callBack);

  $scope.select = function(user){

    $scope.modalData = user;
  }
  $scope.delete = function(data){
    for(var i=0;i<$scope.addressJSON.length;i++){
      if(data.name == $scope.addressJSON[i].name ){
        $scope.addressJSON.splice(i,1);
      }
    }
  }

}]);
