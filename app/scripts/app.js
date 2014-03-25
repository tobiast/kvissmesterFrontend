'use strict';

angular.module('frontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/scoreboard.html',
        controller: 'ScoreboardCtrl'
      })
      .when('/scoreboard', {
        templateUrl: 'views/scoreboard.html',
        controller: 'ScoreboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
