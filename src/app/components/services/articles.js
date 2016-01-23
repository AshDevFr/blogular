(function() {
  'use strict';

  angular
    .module('blogularApp-components')
    .factory('Articles', Articles);

  Articles.$inject = ['$resource'];

  function Articles($resource) {
    return $resource('/api/articles/:id', {id : '@id'},
      {
        update : {method : 'PUT'}
      });
  }
})();
