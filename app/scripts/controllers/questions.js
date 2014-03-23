'use strict';

angular.module('frontendApp')
  .controller('QuestionsCtrl', function ($scope, $http, $resource, Question) {

    $scope.questions = Question.query();
    
  });
