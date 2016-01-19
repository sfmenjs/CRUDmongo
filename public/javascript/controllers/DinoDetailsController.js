(function() {
  "use strict";
  angular.module('app').controller('DinoDetailsController', DinoDetailsController);
  function DinoDetailsController($state, $stateParams, HomeFactory) {
      var vm = this;
      if(!$stateParams.id) $state.go('Home');
      HomeFactory.getDinoById($stateParams.id).then(function(res) {
        vm.dino = res;
      });

      vm.deleteDino = function() {
        HomeFactory.deleteDino($stateParams.id).then(function() {
          $state.go('Home');
        });
      };
  }
})();
