'use strict';
angular.module('frontendApp').factory('Question', ['$resource', function($resource){
  return $resource('//webtutorialbackend.herokuapp.com/admin/questions/:id', {}, {
    'query': {method: 'GET', isArray: true},
    'save': {method: 'POST'}
  });
}]);