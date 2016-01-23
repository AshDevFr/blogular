(function() {
  'use strict';

  angular
    .module('blogularApp-articles')
    .controller('ArticlesController', ArticlesController);

  ArticlesController.$inject = ['$rootScope', '$http'];

  function ArticlesController($rootScope, $http) {
    var vm = this;

    vm.articles = [];

    vm.deleteArticle = deleteArticle;

    activate();

    function activate() {
      $http.get('/api/articles').then(function(response) {
        vm.articles = response.data;
      }, function(err) {
        console.log('Something wrong happened', err);
      });

      $rootScope.$on('newArticle', function(event, article) {
        console.log('Event received: newArticle', article);
        $http.post('/api/articles', article).then(function(response) {
          vm.articles.push(response.data);
        }, function(err) {
          console.log('Something wrong happened', err);
        });
      });
    }

    function deleteArticle(index) {
      $http.delete('/api/articles/' + vm.articles[index].id).then(function() {
        vm.articles.splice(index, 1);
      });
    }
  }
})();
