'use strict';

angular.module('frontendApp')
  .controller('ScoreboardCtrl', function ($scope, $http, $resource, quizfactory) {

    $scope.scores = quizfactory.get({}, function() {
    	console.log('teamname ' + $scope.scores.scoreboard[0].teamName)
	});
	
  });

