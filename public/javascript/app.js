(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);

	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: '/templates/home.html',
      controller: 'HomeController as vm'
		}).state('DinoDetails', {
			url: '/Dino/:id',
			templateUrl: '/templates/dino_details.html',
			controller: 'DinoDetailsController as vm'
		}).state('CreateDino', {
			url: '/Dinos/Create',
			templateUrl: '/templates/create_dino.html',
			controller: 'CreateDinoController as vm'
		}).state('UpdateDino', {
			url: '/Dinos/Update/:id',
			templateUrl: '/templates/update_dino.html',
			controller: 'UpdateDinoController as vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
