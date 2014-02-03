'use strict';
angular.module('frontendApp')
  .factory('questionfactory', ['$resource', function($resource){

    return $resource('http://localhost:5000/admin/questions/', {}, {  
    //	'get': {method: 'GET', isArray: true } 
    });   

  }]);