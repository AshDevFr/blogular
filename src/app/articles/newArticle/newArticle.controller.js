(function() {
  'use strict';

  angular
    .module('blogularApp-articles-newArticle')
    .controller('NewArticleController', NewArticleController);

  NewArticleController.$inject = ['$scope'];

  function NewArticleController($scope) {
    $scope.newArticle = {};

    $scope.addArticle = addArticle;

    function addArticle() {
      console.log($scope.newArticle);
    }
  }
})();
