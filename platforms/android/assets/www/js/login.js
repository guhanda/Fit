angular.module('loginapp', [])

    .factory('LoginApp', function ($rootScope, $q, $window, $http) {

    	var runningInCordova;

    // Verifica se o app esta pronto
	document.addEventListener("deviceready", function () {
		runningInCordova = true;
		//alert('app ok');
		console.log('device ready');
	}, false);


	//


    });