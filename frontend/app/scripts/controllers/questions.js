'use strict';

angular.module('frontendApp')
  .controller('QuestionsCtrl', function ($scope, $http, $resource, Question) {

    $scope.questions = Question.query();

    $scope.addAlternative = function() {
      $scope.newQuestion.alternatives.push($scope.alternativeText);
    };


   $scope.processForm = function() {
  	$http({
          method  : 'POST',
          url     : 'http://192.168.50.94:5000/admin/questions/',
          data    : $scope.formData,  
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }   })
          .success(function(data) {
              console.log(data);

              if (!data.success) {
                  $scope.errorName = data.errors.name;
                  $scope.errorSuperhero = data.errors.superheroAlias;
              } else {
                  $scope.message = data.message;
              }
          });
  	};
  });
