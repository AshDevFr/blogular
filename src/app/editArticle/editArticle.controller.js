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
      vm.article = Articles.get({id : $routeParams.id});
    }

    function updateArticle() {
      vm.article.$update(function() {
        $location.path('/articles');
      }, function(err) {
        console.log('Something wrong happened', err);
      });
    }
  }
})();
