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
      .when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'QuestionsCtrl'
      })
      .when('/registerquestion', {
        templateUrl: 'views/registerquestion.html',
        controller: 'RegisterQuestionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
