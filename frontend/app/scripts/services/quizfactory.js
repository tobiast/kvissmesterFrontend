'use strict';
angular.module('frontendApp')
  .factory('quizfactory', ['$resource', function($resource){

    return $resource('http://kvissmester.herokuapp.com/quiz/scoreboard', {}, {   
    });   

  }]);