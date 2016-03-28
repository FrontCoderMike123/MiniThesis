(function() {
var miniSite = angular.module('miniSite', ['ui.router','ngSanitize']);

miniSite.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('About',{
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'aboutCTRL',
		activeNav: 'about'
	});
	$stateProvider.state('Tech',{
		url: '/tech',
		templateUrl: 'views/tech.html',
		controller: 'techCTRL',
		activeNav: 'tech'
	});
	$stateProvider.state('Features',{
		url: '/features',
		templateUrl: 'views/features.html',
		controller: 'featuresCTRL',
		activeNav: 'features'
	});
	$stateProvider.state('Tour',{
		url: '/tour',
		templateUrl: 'views/tour.html',
		controller: 'tourCTRL',
		activeNav: 'tour'
	});
	$stateProvider.state('Developer',{
		url: '/developer',
		templateUrl: 'views/developer.html',
		controller: 'developerCTRL',
		activeNav: 'developer'
	});
	$urlRouterProvider.otherwise('/about');
}]);//CONGIF

//CONTROLLERS

miniSite.controller('homeCTRL',['$scope','$state',function($scope,$state){
	$scope.$state = $state;
	$scope.links = [
		{ 'Path':'about', 'Name':'About', 'Type':'about', 'Back':'aboutNav' },
		{ 'Path':'tech', 'Name':'Tech', 'Type':'tech', 'Back':'techNav' },
		{ 'Path':'features', 'Name':'Features', 'Type':'features', 'Back':'featureNav' },
		{ 'Path':'tour', 'Name':'Tour', 'Type':'tour', 'Back':'tourNav' },
		{ 'Path':'developer', 'Name':'Developer', 'Type':'developer', 'Back':'devNav' }
	];
}]);

miniSite.controller('aboutCTRL',['$scope','$http',function($scope,$http){

}]);

miniSite.controller('techCTRL',['$scope','$http',function($scope,$http){
	$http.get('tech.json').success(function(data) {
		$scope.techs = data.Techs;
	});

	$scope.stagger = function(){
		var holder = document.querySelectorAll('.listHolder');
		for(var i=0; i<holder.length; i++){
			holder[i].classList.add('block');
		}
	TweenMax.staggerFrom(".tween",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
	};

}]);

miniSite.controller('featuresCTRL',['$scope','$http',function($scope,$http){
	$http.get('features.json').success(function(data) {
		$scope.features = data.Features;
	});
}]);

miniSite.controller('tourCTRL',['$scope','$http',function($scope,$http){
	$http.get('tour.json').success(function(tour){
		$scope.Imgs = tour.Tour;
	});
}]);

miniSite.controller('developerCTRL',['$scope','$http',function($scope,$http){
	$http.get('developer.json').success(function(data) {
		$scope.coders = data.Developer;
	});

	$scope.myList = function(){
		var divs = document.querySelector('#myInfo');
		var holder = document.querySelector('#selfHolder');
		var theList = document.querySelector('#foldOut');
		divs.classList.add('block');
		holder.classList.add('noPadding');
		theList.classList.add('block');
		TweenMax.staggerFrom(".myInfos",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
		TweenMax.staggerFrom(".myLists",2,{opacity:0,delay:0.5}, 0.1);
	};
}]);

//CONTROLLERS END

})();//SEAF