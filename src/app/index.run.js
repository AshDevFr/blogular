(function() {
  'use strict';

  angular
    .module('blogularApp')
    .run(runBlock);

  runBlock.$inject = ['$rootScope'];

  function runBlock($rootScope) {
    $rootScope.$on("$routeChangeSuccess", function(event, current) {
      $rootScope.activeTab = current.tabName || '';
    });
  }
})();
