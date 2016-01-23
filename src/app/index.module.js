(function() {
  'use strict';

  angular
    .module('blogularApp', [
      'blogularApp-home',
      'blogularApp-articles',
      'blogularApp-editArticle',
      'ngRoute',
      'ngMessages'
    ]);
})();
