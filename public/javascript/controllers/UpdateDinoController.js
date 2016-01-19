(function() {
  "use strict";
  angular.module('app').controller('UpdateDinoController', UpdateDinoController);
  function UpdateDinoController(HomeFactory, $state, $stateParams) {
      var vm = this;
      if(!$stateParams.id) $state.go('Home');
      HomeFactory.getDinoById($stateParams.id).then(function(res) {
        vm.dino = res;
      });

      vm.updateDino = function() {
        HomeFactory.updateDino(vm.dino).then(function(res) {
          $state.go('DinoDetails', { id: vm.dino._id });
        });
      }
  }
})();
