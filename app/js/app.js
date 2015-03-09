define([
	'angular',
	'angular-ui-router',
	'angular-resource',
	'angular-messages',
	'angular-ui-bootstrap',
	'angular-moment',
	'angular-codemirror',
	'angular-file-upload',
	'controllers/Controllers',
	'services/Services',
	'factories/Factories',
	'directives/Directives',
	'filters/Filters'
], function () {
	var app;
	app = angular.module('tfg', [
		'ui.router',
		'ui.bootstrap',
		'ui.codemirror',
		'ngResource',
		'ngMessages',
		'angularFileUpload',
		'angularMoment',
		'controllers',
		'services',
		'factories',
		'directives',
		'filters'
	]);
	return app;
});
