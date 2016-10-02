(function (){
	
angular.module("spaceGym").controller("registrationController",registration);

function registration ($scope) {
  
 $scope.login=function(){
 	
 	$scope.message="welcome" +$scope.user.email;
 };
 
 $scope.register=function (){
 	
 	$scope.message="welcome" + " "+ $scope.user.email;
 };
}
	
	
})();
