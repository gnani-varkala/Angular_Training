var app = angular.module('routeApp', ["ui.router"]);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('main', {
          url:'/',
          controller : 'jsonCtrl',
          templateUrl: '../VIEW/card.html',
          resolve: {
            getImage: function($http){
              return  $http.get("./JSON/image.json").then(function(response) {
                return response.data;
                })
            }
          }
      })
      .state('message', {
          url:'/message/:id',
          controller : 'messageCtrl',
          templateUrl: '../VIEW/message.html'
      });

}]);

app.controller('jsonCtrl',function($scope,getImage){
   $scope.myJson = getImage;

});

app.controller('messageCtrl',function($scope,$stateParams){
  $scope.name = $stateParams.id;
})
