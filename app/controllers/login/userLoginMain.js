(function (){
	var userLogin=angular.module('spaceGym',['ngRoute']);
	
	userLogin.config=(['$routeProvider',function ($routeProvider){
		
	$routeProvider.
	when('/login',{
		templetUrl:'app/views/login/login.html',
		controller:'registrationController'	
	}).
	when('/register',{
		templetUrl:'app/views/login/register.html',
		controller:'registrationController'
	}).
	when('/success',{
		templetUrl:'app/views/login/success.html',
		controller:'successController'
	}).
	otherwise({
		redirectTo:'/login'
	});	
	
	
	}]);
	
	
})();
