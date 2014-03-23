'use strict';
angular.module('frontendApp').factory('Question', ['$resource', function($resource){
  return $resource('//webtutorialbackend.herokuapp.com/admin/questions/:id', {}, {
    // foreløpig returnerer ikke GET / en array:
    //'query': {method: 'GET', isArray: true},
    'query': {method: 'GET'},
    'save': {method: 'POST'}
  });
}]);
