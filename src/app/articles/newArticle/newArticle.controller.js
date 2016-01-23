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
      var date = new Date();
      $scope.newArticle.published = date;

      console.log($scope.newArticle);

      $scope.articles.push($scope.newArticle);
      $scope.newArticle = {};
    }
  }
})();
