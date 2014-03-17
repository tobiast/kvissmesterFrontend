'use strict';
angular.module('frontendApp')
  .factory('questionfactory', ['$resource', function($resource){

    return $resource('http://192.168.50.94:5000/admin/questions', {}, {  
    //	'get': {method: 'GET', isArray: true } 
    });   

  }]);