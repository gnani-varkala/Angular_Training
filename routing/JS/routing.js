var app = angular.module('angular_app', ["ui.router"])
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
          url:'/',
          templateUrl: 'VIEW/carousel.html'
      });
}]);
