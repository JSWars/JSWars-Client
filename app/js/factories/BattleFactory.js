define([
		'factories/Factories',
		'factories/ConfigFactory'
	],
	function (Factories) {
		Factories.factory('BattleFactory', ['$resource', 'Config', function BattleFactory($resource, Config) {
			return $resource(Config.host + 'battle/:id', {}, {
				list: {
					url: Config.host + 'battle/',
					method: 'GET',
					isArray: true
				},
				get: {
					url: Config.host + 'battle/:id',
					method: 'GET',
					isArray: false
				},
				chunk: {
					url:  Config.host + 'battle/:id/chunk/:chunkId',
					method: 'GET',
					isArray: true //todo: probably object
				},
				queue:{
					url:  Config.host + 'battle/',
					method: 'POST',
					isArray: false //todo: probably object
				},
				queueGet:{
					url:  Config.host + 'battle/queue/:id/',
					method: 'GET',
					isArray: false //todo: probably object
				}
			});
		}]);
	});
