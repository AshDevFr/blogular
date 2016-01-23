(function() {
  'use strict';

  angular
    .module('blogularApp-components')
    .directive('myArticle', myArticle);

  function myArticle() {
    return {
      restrict    : 'E',
      templateUrl : 'app/components/directives/myArticle/myArticle.html',
      scope       : {
        article       : '=',
        deleteArticle : '&'
      }
    }
  }
})();
