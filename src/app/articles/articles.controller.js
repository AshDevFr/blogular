(function() {
  'use strict';

  angular
    .module('blogularApp-articles')
    .controller('ArticlesController', ArticlesController);

  ArticlesController.$inject = ['$rootScope', 'Articles'];

  function ArticlesController($rootScope, Articles) {
    var vm = this;

    vm.articles = [];

    vm.deleteArticle = deleteArticle;

    activate();

    function activate() {
      vm.articles = Articles.query();

      $rootScope.$on('newArticle', function(event, article) {
        console.log('Event received: newArticle', article);
        Articles.save(article, function(response) {
          vm.articles.push(response);
        }, function(err) {
          console.log('Something wrong happened', err);
        });
      });
    }

    function deleteArticle(index) {
      vm.articles[index].$remove(function() {
        vm.articles.splice(index, 1);
      });
    }
  }
})();
