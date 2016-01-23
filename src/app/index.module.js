(function() {
  'use strict';

  angular
    .module('blogularApp', [
      'blogularApp-components',
      'blogularApp-home',
      'blogularApp-articles',
      'blogularApp-editArticle',
      'ngRoute',
      'ngMessages',
      'ngResource'
    ]);
})();
