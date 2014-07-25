

/**
 * @ngdoc overview
 * @name firebaseApp
 * @description
 * # firebaseApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'routeSecurity',
    'simpleLoginTools'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/chat', { 
        templateUrl : 'views/chat.html',
        controller: 'ChatCtrl',
        authRequired: true
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/logout', {
        template: 'Logging out...',
        controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL','https://sizzling-fire-6312.firebaseio.com/')
  .constant('MSGURL','https://sizzling-fire-6312.firebaseio.com/messages')
  .constant('loginRedirectPath', '/login');