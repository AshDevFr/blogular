(function() {
  'use strict';

  angular
    .module('blogularApp-components')
    .factory('Articles', Articles);

  Articles.$inject = ['$http'];

  function Articles($http) {
    var URI     = '/api/articles',
        service = {
          fetch          : fetch,
          fetchOne       : fetchOne,
          update         : update,
          create         : create,
          remove         : remove
        };

    return service;

    function fetch() {
      return $http.get(URI);
    }

    function fetchOne(articleId) {
      return $http.get(URI + '/' + articleId);
    }

    function update(article) {
      if (typeof article.id !== 'undefined') {
        return $http.put(URI + '/' + article.id, article);
      } else {
        return create(article);
      }
    }

    function create(article) {
      return $http.post(URI, article);
    }

    function remove(article) {
      return $http.delete(URI + '/' + article.id);
    }
  }
})();
