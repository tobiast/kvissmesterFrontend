'use strict';
angular.module('frontendApp')
  .factory('quizfactory', ['$resource', function($resource){

    return $resource('http://webtutorialbackend.herokuapp.com/quiz/scoreboard', {}, {   
    	
    });   

  }]);