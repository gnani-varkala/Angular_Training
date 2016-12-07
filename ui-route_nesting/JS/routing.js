
var app = angular.module('myProject', ["ui.router"])
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when("/home", "/home/");
  $urlRouterProvider.when("/home/HTML", "/home/HTML/");
  $urlRouterProvider.when("/home/CSS", "/home/CSS/");
  $urlRouterProvider.when("/home/JS", "/home/JS/");
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
              templateUrl:"VIEW/html-description.html",
          }
        }

      })
	  .state('home.html.HTML5',{
        url:"/html5",
        views:{
          'body':{
              templateUrl:"VIEW/html5-description.html",
          }
        }

      })
	  .state('home.html.XML',{
        url:"/xml",
        views:{
          'body':{
              templateUrl:"VIEW/xml-description.html",
          }
        }

      })
	  .state('home.CSS',{
        url:"/CSS",
        views:{
          'content':{
              templateUrl:"VIEW/css_vertical_nav.html",
          }
        }

      })
      .state('home.CSS.intro',{
        url:"/",
        views:{
          'body':{
              templateUrl:"VIEW/css_body.html",
          }
        }

      })
	  .state('home.CSS.css',{
        url:"/css",
        views:{
          'body':{
              templateUrl:"VIEW/css-description.html",
          }
        }

      })
	  .state('home.CSS.css3',{
        url:"/css3",
        views:{
          'body':{
              templateUrl:"VIEW/css3-description.html",
          }
        }

      })
      .state('home.CSS.bootstrap',{
          url:"/bootstrap",
          views:{
            'body':{
                templateUrl:"VIEW/bootstrap-description.html",
            }
          }

        })
        .state('home.JS',{
          url:"/JS",
          views:{
            'content':{
                templateUrl:"VIEW/js_vertical_nav.html",
            }
          }

        })
        .state('home.JS.intro',{
          url:"/",
          views:{
            'body':{
                templateUrl:"VIEW/js_body.html",
            }
          }

        })
        .state('home.JS.javascript',{
          url:"/javascript",
          views:{
            'body':{
                templateUrl:"VIEW/javascript-description.html",
            }
          }

        })
  	  .state('home.JS.jquery',{
          url:"/jquery",
          views:{
            'body':{
                templateUrl:"VIEW/jquery-description.html",
            }
          }

        })
  	  .state('home.JS.angularjs',{
          url:"/angularjs",
          views:{
            'body':{
                templateUrl:"VIEW/angularjs-description.html",
            }
          }

        });

}]);
