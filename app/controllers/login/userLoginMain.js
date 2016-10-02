(function (){
	var userLogin=angular.module("spaceGym");
	
	userLogin.config(["$routeProvider",function ($routeProvider){
		
	$routeProvider.
	when('/login',{
		templateUrl:'app/views/login/login.html',
		controller:'registrationController'	
	}).
	when('/register',{
		templateUrl:'app/views/login/register.html',
		controller:'registrationController'
	}).
	when('/success',{
		templateUrl:'app/views/login/success.html',
		controller:'successController'
	}).
	otherwise({
		redirectTo:'/login'
		
	});	
	
	
	}]);
	
	
})();
