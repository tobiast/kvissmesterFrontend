'use strict';

angular.module('frontendApp')
  .controller('QuestionsCtrl', function ($scope, $http, $resource, questionfactory) {
   
  $scope.questions = questionfactory.get({}, function() {
  //	console.log("getting: " + $scope.questions[0])
  });


 $scope.processForm = function() {
	$http({
        method  : 'POST',
        url     : 'http://localhost:5000/admin/questions/',
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
