'use strict';
angular.module('frontendApp')
  .factory('quizfactory', ['$resource', function($resource){

    return $resource('http://localhost:5000/quiz/scoreboard', {}, {   
    });   

  }]);