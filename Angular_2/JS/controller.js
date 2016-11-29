var app = angular.module("angular_app",[]);

app.controller('mainCtrl',function($scope){
  $scope.loginShow=false;
  $scope.signUpShow=false;

  $scope.login = function(){
    $scope.loginShow = true;
      $scope.signUpShow=false;
  }
  $scope.signUp = function(){
    $scope.loginShow = false;
      $scope.signUpShow=true;
  }

});

app.controller('loginCtrl',function($scope){
  $scope.userName= "";
  $scope.Password=false;

});

app.controller('signUpCtrl',function($scope){
  

});