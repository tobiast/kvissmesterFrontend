'use strict';

angular.module('frontendApp')
  .controller('QuestionCtrl', function ($scope, $http, $resource) {
    $scope.question = {
      id: null,
      questionText: null,
      timeLimitSec: 30,
      numberOfPoints:  10,
      correctAnswer: null,
      alternatives: []
    }; 

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
      console.info("Skal lagre spørsmål");
      console.info($scope.question);
      $http({
            method  : 'POST',
            url     : 'http://192.168.50.94:5000/admin/questions',
            data    : $scope.question,  
            headers : { 'Content-Type': 'application/json' }
          })
          .success(function(data) {
              console.log(data);

              if (!data.success) {
                  $scope.errorName = data.errors.name;
                  $scope.errorSuperhero = data.errors.superheroAlias;
              } else {
                  $scope.message = data.message;
              }
          });
    }
  });
