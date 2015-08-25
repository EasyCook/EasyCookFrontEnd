'use strict';

angular.module('easycook', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl'
	})
	.state('single', {
		url: '/recipes/:id?',
		templateUrl: 'app/recipe/recipe.html',
		controller: 'RecipeCtrl'
	})
	.state('create', {
		url: '/recipe/create',
		templateUrl: 'app/recipe/create.html',
		controller: 'RecipeCreateCtrl'
	})
	.state('search', {
		url: '/search/:term',
		templateUrl: 'app/search/search.html',
		controller: 'SearchCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'app/login/login.html',
		controller: 'LoginCtrl'
	})
	.state('account', {
		url: '/me',
		templateUrl: 'app/account/account.html',
		controller: 'AccountCtrl'
	})

	$urlRouterProvider.otherwise('/')
})
