(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};

		o.getAllDinos = function() {
			var q = $q.defer();
			$http.get('/api/v1/dino').then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.getDinoById = function(id) {
			var q = $q.defer();
			$http.get('/api/v1/dino/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.createDino = function(dino) {
			var q = $q.defer();
			$http.post('/api/v1/dino', dino).then(function() {
				q.resolve();
			});
			return q.promise;
		};

		o.updateDino = function(dino) {
			var q = $q.defer();
			$http.put('/api/v1/dino/' + dino._id, dino).then(function(res) {
				//not using res.data in the controller, might use in another controller
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.deleteDino = function(id) {
			var q = $q.defer();
			$http.delete('/api/v1/dino/' + id).then(function() {
				q.resolve();
			});
			return q.promise;
		};

		return o;
	}
})();
