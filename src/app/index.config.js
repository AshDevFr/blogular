(function() {
  'use strict';

  angular
    .module('blogularApp')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl  : 'app/home/home.html',
        controller   : 'HomeController',
        controllerAs : 'HomeCtrl',
        tabName      : 'home'
      })
      .when('/articles', {
        templateUrl  : 'app/articles/articles.html',
        controller   : 'ArticlesController',
        controllerAs : 'ArticlesCtrl',
        tabName      : 'articles'
      })
      .otherwise({
        redirectTo : '/'
      });
  }
})();
