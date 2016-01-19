(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(HomeFactory) {
		var vm = this;

		HomeFactory.getAllDinos().then(function(res) {
			vm.dinos = res;
		});
	}
})();
