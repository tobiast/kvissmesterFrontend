'use strict';

angular.module('frontendApp')
  .controller('RegisterQuestionCtrl', function ($scope, $http, $resource, Question) {

    $scope.question = new Question({
      questionText: null,
      timeLimitSec: 30,
      numberOfPoints:  10,
      correctAnswer: null,
      alternatives: []
    }); 

    $scope.addAlternative = function() {
      $scope.question.alternatives.push({
        id: $scope.question.alternatives.length+1, 
        answer: $scope.answer
      });
      if ($scope.question.alternatives.length == 1) {
        $scope.question.correctAnswer = 1;
      }
    };

    $scope.deleteAlternative = function(alternative) {
      $scope.question.alternatives = $scope.question.alternatives.filter(function(alt) {
        return alt.id != alternative.id;
      });
      $scope.question.alternatives.forEach(function(alt, index) {
        alt.id = index+1;
      });
      if ($scope.question.correctAnswer == alternative.id) {
        $scope.question.correctAnswer = null;
      }
    };

    $scope.saveQuestion = function() {
      console.info("Saving question");
      console.info($scope.question);
      $scope.question.$save();

      console.info("Question got id: " + $scope.question.id);
    }
  });
