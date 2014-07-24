(function(angular) {

	'use strict';

	angular.module('firebaseApp')
	.controller('LogoutCtrl', function($scope, $firebaseSimpleLogin, FBURL, $window) {

		var fbRef = new Firebase(FBURL);
		$scope.auth = $firebaseSimpleLogin(fbRef);
		$scope.auth.$logout(); // log out the user
		$window.location.href = '/#/';
	});

}(window.angular));