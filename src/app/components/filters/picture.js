(function() {
  'use strict';

  angular
    .module('blogularApp-components')
    .filter('picture', PictureFilter);

  function PictureFilter() {
    return function(url) {
      if (!url) {
        return "assets/images/noPicture.png";
      } else {
        return url;
      }
    };
  }
})();
