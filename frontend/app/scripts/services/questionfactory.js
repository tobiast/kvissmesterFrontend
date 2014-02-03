'use strict';
angular.module('frontendApp')
  .factory('questionfactory', ['$resource', function($resource){

    return $resource('http://kvissmester.herokuapp.com/admin/questions', {}, {  
    //	'get': {method: 'GET', isArray: true } 
    });   

  }]);