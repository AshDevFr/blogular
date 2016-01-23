(function() {
  'use strict';

  angular
    .module('blogularApp')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope'];

  function IndexController($scope) {
    $scope.name = 'World';
  }
})();
