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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/scoreboard', {
        templateUrl: 'views/scoreboard.html',
        controller: 'ScoreboardCtrl'
      })
      .when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'QuestionsCtrl'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
