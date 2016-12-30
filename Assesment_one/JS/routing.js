
(function () {
    'use strict';

    angular
        .module('fieldApp')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise('/main');

          $stateProvider
              .state('main', {
                  url:'/main',
                  controller : 'jsonCtrl',
                  templateUrl: 'VIEW/main-page.html',
                  resolve: {
                    getMyJson: function($http){
                      return  $http.get("./JSON/table.json").then(function(response) {
                        return response.data;
                        })
                    }
                  }
              })
              .state('main.navbar',{
                url:'/',
                templateUrl:'VIEW/vertical-navbar.html'
              });
        }]);
})();
