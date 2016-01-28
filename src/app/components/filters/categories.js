(function() {
  'use strict';

  angular
    .module('blogularApp-components')
    .filter('categories', CategoriesFilter);

  function CategoriesFilter() {
    return function(categoryList) {
      if (typeof categoryList !== 'object' || !(categoryList instanceof Array)) {
        return categoryList;
      } else {
        return categoryList.join(', ');
      }
    };
  }
})();
