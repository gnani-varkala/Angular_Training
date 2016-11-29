var app = angular.module("angular_app",[]);

app.controller('mainCtrl',function($scope,$rootScope){
  $rootScope.loginShow=false;
  $rootScope.signUpShow=false;
	$rootScope.beforeLoginShow=false;
	$rootScope.afterLoginShow = false;

  $scope.login = function(){
    $rootScope.loginShow = true;
      $rootScope.signUpShow=false;
	$rootScope.beforeLoginShow=true;
	$rootScope.afterLoginShow = false;
  }
  $scope.signUp = function(){
    $rootScope.loginShow = false;
      $rootScope.signUpShow=true;
  }

});

app.controller('loginCtrl',function($scope,$rootScope){
	$rootScope.beforeLoginShow=true;
	$rootScope.afterLoginShow = false;
	$scope.userName = "";
	$scope.Password = "";
	$scope.loginSubmit = function(){
		var flag=false;
		for(var i=0;i<$rootScope.userData.length;i++){
		console.log($rootScope.userData);
		if($scope.userName == $rootScope.userData[i].username && $scope.Password == $rootScope.userData[i].password  ){
			$rootScope.name = $scope.userName;
			flag=true;
		}
		}
		if(flag == true){
			$rootScope.beforeLoginShow=false;
			$rootScope.afterLoginShow = true;
			$scope.userName = "";
			$scope.Password = "";
		}
	}

});

app.controller('signUpCtrl',function($scope,$rootScope){
	$scope.userName = "";
	$scope.Password = "";
	$scope.conform_Password = "";
	$rootScope.userData = []
	$scope.signUpSubmit = function(){
		if($scope.Password == $scope.conform_Password){
			var user = {};
			user.username = $scope.userName;
			user.password = $scope.Password;
			$rootScope.userData.push(user);
			alert("details saved");
			$scope.userName = "";
			$scope.Password = "";
			$scope.conform_Password = "";
		}
	}
	

});


