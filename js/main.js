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

//You will see here that i TRIEEDDD!!!!! to make an active nav... things were messing up...
//either the sections and divs would float above eachother .... or the nav would turn on and off....
//too see for yourself... just add in the UL in index.html. ng-controller="NavCtrl"... see for yourslef

miniSite.controller('NavCtrl',['$scope','$http','$location',function($scope,$http,$location){
	$scope.getClass = function(path) {
    var cur_path = $location.path().substr(0, path.length);
    if (cur_path == path) {
        if($location.path().substr(0).length > 1 && path.length == 1 )
            return "";
        else
            return "active";
    } else {
        return "";
    }
}
}]);

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