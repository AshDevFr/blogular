(function() {
  'use strict';

  angular
    .module('blogularApp-editArticle')
    .controller('EditArticleController', EditArticleController);

  EditArticleController.$inject = ['Articles', '$routeParams', '$location'];

  function EditArticleController(Articles, $routeParams, $location) {
    var vm = this;

    vm.article = {};

    vm.updateArticle = updateArticle;

    activate();

    function activate() {
      Articles.fetchOne($routeParams.id).then(function(response) {
        vm.article = response.data;
      }, function(err) {
        console.log('Something wrong happened', err);
      });
    }

    function updateArticle() {
      Articles.update(vm.article).then(function() {
        $location.path('/articles');
      }, function(err) {
        console.log('Something wrong happened', err);
      });
    }
  }
})();
