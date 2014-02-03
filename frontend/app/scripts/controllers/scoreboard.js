'use strict';

angular.module('frontendApp')
  .controller('ScoreboardCtrl', function ($scope, $http, $resource, quizfactory) {

    $scope.scores = quizfactory.get({}, function() {
    	console.log($scope.scoreboard.teamname)
	});

  	
  });

