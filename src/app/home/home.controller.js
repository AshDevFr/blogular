(function() {
  'use strict';

  angular
    .module('blogularApp-home')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  function HomeController() {
    var vm = this;

    vm.name = 'World';
  }
})();
