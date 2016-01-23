(function() {
  'use strict';

  angular
    .module('blogularApp-articles-newArticle')
    .controller('NewArticleController', NewArticleController);

  NewArticleController.$inject = ['$rootScope'];

  function NewArticleController($rootScope) {
    var vm = this;

    vm.newArticle = {};

    vm.addArticle = addArticle;

    function addArticle() {
      var date = new Date();

      vm.newArticle.published = date;
      console.log('Emit event: newArticle');
      $rootScope.$emit('newArticle', vm.newArticle);
      vm.newArticle = {};
    }
  }
})();
