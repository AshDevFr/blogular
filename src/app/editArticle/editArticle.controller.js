(function() {
  'use strict';

  angular
    .module('blogularApp-editArticle')
    .controller('EditArticleController', EditArticleController);

  EditArticleController.$inject = ['$http', '$routeParams', '$location'];

  function EditArticleController($http, $routeParams, $location) {
    var vm = this;

    vm.article = {};

    vm.updateArticle = updateArticle;

    activate();

    function activate() {
      $http.get('/api/articles/' + $routeParams.id).then(function(response) {
        vm.article = response.data;
      }, function(err) {
        console.log('Something wrong happened', err);
      });
    }

    function updateArticle() {
      $http.put('/api/articles/' + $routeParams.id, vm.article).then(function() {
        $location.path('/articles');
      }, function(err) {
        console.log('Something wrong happened', err);
      });
    }
  }
})();
