(function() {
  'use strict';

  angular
    .module('blogularApp-home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    $scope.name = 'World';
  }
})();
