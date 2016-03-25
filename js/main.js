(function() {
var miniSite = angular.module('miniSite', ['ui.router','ngSanitize']);

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
	$stateProvider.state('Tour',{
		url: '/tour',
		templateUrl: 'views/tour.html',
		controller: 'tourCTRL'
	});
	$stateProvider.state('Developer',{
		url: '/developer',
		templateUrl: 'views/developer.html',
		controller: 'developerCTRL'
	});
	$urlRouterProvider.otherwise('/about');
}]);//CONGIF

//CONTROLLERS

//You will see here that i TRIEEDDD!!!!! to make an active nav... things were messing up...
//either the sections and divs would float above eachother .... or the nav would turn on and off....
//too see for yourself... just add in the UL in index.html. ng-controller="NavCtrl"... see for yourslef

miniSite.controller('navCTRL',['$scope','$http','$location',function($scope,$http,$location){

}]);

miniSite.controller('homeCTRL',['$scope','$http','$location',function($scope,$http,$location){

}]);

miniSite.controller('aboutCTRL',['$scope','$http',function($scope,$http){

}]);

miniSite.controller('techCTRL',['$scope','$http',function($scope,$http){
	$http.get('tech.json').success(function(data) {
		$scope.techs = data.Techs;
	});
	var button = document.querySelector('#techStagger');
	function toolList() {
		var holder = document.querySelectorAll('.listHolder');
		for(var i=0; i<holder.length; i++){
			holder[i].classList.add('block');
		}
	TweenMax.staggerFrom(".tween",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
	};
    button.addEventListener('click',toolList,false);
}]);

miniSite.controller('featuresCTRL',['$scope','$http',function($scope,$http){
	$http.get('features.json').success(function(data) {
		$scope.features = data.Features;
	});
}]);

miniSite.controller('tourCTRL',['$scope','$http',function($scope,$http){

}]);

miniSite.controller('developerCTRL',['$scope','$http',function($scope,$http){
	$http.get('developer.json').success(function(data) {
		$scope.coders = data.Developer;
	});
}]);

//CONTROLLERS END

})();//SEAF