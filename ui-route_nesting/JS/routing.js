var app = angular.module('myProject', ["ui.router"])
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when("/home", "/home/");
  $urlRouterProvider.when("/home/HTML", "/home/HTML/");
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('main', {
          url:'/',
          views: {
              'viewA': {
                  templateUrl: 'VIEW/mainPage.html',
              }
            },
      })
      .state('home', {
          url:'/home',
          views: {
              'viewA': {
                  templateUrl: 'VIEW/navbar.html',
              }
            },
      })
      .state('home.intro',{
        url:"/",
        views:{
          'content':{
              templateUrl:"VIEW/mainbody.html",
          }
        }

      })
      .state('home.html',{
        url:"/HTML",
        views:{
          'content':{
              templateUrl:"VIEW/html_vertical_nav.html",
          }
        }

      })
      .state('home.html.intro',{
        url:"/",
        views:{
          'body':{
              templateUrl:"VIEW/html_body.html",
          }
        }

      })
      .state('home.html.HTML',{
        url:"/html",
        views:{
          'body':{
              templateUrl:"VIEW/html_vertical_nav.html",
          }
        }

      });

}]);
