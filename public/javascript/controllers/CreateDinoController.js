(function() {
  "use strict";
  angular.module('app').controller('CreateDinoController', CreateDinoController);
  function CreateDinoController(HomeFactory, $state) {
      var vm = this;
      vm.dino = { looks: {}, diet: 'Omnivore', canFly: true };

      vm.createDino = function() {
        HomeFactory.createDino(vm.dino).then(function() {
          $state.go('Home');
        });
      };
  }
})();
