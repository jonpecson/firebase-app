

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
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL','https://sizzling-fire-6312.firebaseio.com/');
