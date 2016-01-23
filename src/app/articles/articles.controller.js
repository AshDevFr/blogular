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
      Articles.fetch().then(function(response) {
        vm.articles = response.data;
      }, function(err) {
        console.log('Something wrong happened', err);
      });

      $rootScope.$on('newArticle', function(event, article) {
        console.log('Event received: newArticle', article);
        Articles.create(article).then(function(response) {
          vm.articles.push(response.data);
        }, function(err) {
          console.log('Something wrong happened', err);
        });
      });
    }

    function deleteArticle(index) {
      Articles.remove(vm.articles[index]).then(function() {
        vm.articles.splice(index, 1);
      });
    }
  }
})();
