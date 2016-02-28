(function() {
var miniSite = angular.module('miniSite', ['ui.router','ngSanitize','ngAnimate']);

miniSite.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('About',{
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'aboutCTRL'
	});
	$stateProvider.state('Tech',{
		url: '/tech',
		templateUrl: 'views/tech.html',
		controller: 'techCTRL'
	});
	$stateProvider.state('Features',{
		url: '/features',
		templateUrl: 'views/features.html',
		controller: 'featuresCTRL'
	});
	$stateProvider.state('Developer',{
		url: '/developer',
		templateUrl: 'views/developer.html',
		controller: 'developerCTRL'
	});
	$urlRouterProvider.otherwise('/about');
}]);//CONGIF

//CONTROLLERS

miniSite.controller('aboutCTRL',['$scope','$http',function($scope,$http){
	
}]);

miniSite.controller('techCTRL',['$scope','$http',function($scope,$http){
	$http.get('tech.json').success(function(data) {
		$scope.techs = data.Tech;
	});
}]);

miniSite.controller('featuresCTRL',['$scope','$http',function($scope,$http){
	$http.get('features.json').success(function(data) {
		$scope.features = data.Features;
	});
}]);

miniSite.controller('developerCTRL',['$scope','$http',function($scope,$http){
	$http.get('developer.json').success(function(data) {
		$scope.coders = data.Developer;
	});
}]);

//CONTROLLERS END

})();//SEAF