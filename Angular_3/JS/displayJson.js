var app = angular.module("angular_app",[]);

app.controller('jsonCtrl',['$scope','$http',function($scope,$http){
  $scope.jsonDetails =[];
  $http.get('/JSON/details.json').then(function success(response){
    $scope.jsonDetails = response.data;
    console.log($scope.jsonDetails);
  },function error(){
    alert(status);
  });
  $scope.modalShow = false;
  $scope.dummy ={};
  $scope.index=0;
  $scope.edit = function(user,index){
  $scope.style={'opacity':0.5}
  $scope.index=index;
    if(! $scope.modalShow){
      $scope.dummy = user;
      $scope.modalData = angular.copy(user);
      $scope.modalShow = true;
    }//else{
    //   $scope.modalShow = false;
    //
    // }
  }
  $scope.saveit = function(data1){
    $scope.dummy = angular.copy(data1);
    $scope.jsonDetails[$scope.index]=$scope.dummy;
    $scope.modalShow = false;
    $scope.style={'opacity':1}
  }
}]);

app.directive('myModalDir',function(){
  return {
    restrict: 'E',
    scope: {
      data: '=',
      save: '&save'
    },
    templateUrl: './VIEW/modalDirectiveTemp.html',

  };
})
