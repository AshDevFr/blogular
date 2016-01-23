(function() {
  'use strict';

  angular
    .module('blogularApp-articles-newArticle')
    .controller('NewArticleController', NewArticleController);

  NewArticleController.$inject = ['$scope'];

  function NewArticleController($scope) {
    var vm = this;

    vm.newArticle = {};

    vm.addArticle = addArticle;

    function addArticle() {
      var date = new Date();

      vm.newArticle.published = date;

      console.log(vm.newArticle);

      $scope.ArticlesCtrl.articles.push(vm.newArticle);
      vm.newArticle = {};
    }
  }
})();
