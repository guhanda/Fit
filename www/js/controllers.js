angular.module('app.controllers', [])
  

.controller('menuCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};
})

.controller('loginCtrl', function($scope, $http, $state) {

	var data = '';

	$scope.login = {usuario:'',password:''};

	$scope.Login = function () {
		console.log($scope.login.usuario);
		var result = $http.post('http://localhost:3000/loginPage', $scope.login)

		.success(function (data, status, headers, config) {
			//debugger;
                $scope.PostDataResponse = data;
            	if(data == false)
				{
					$state.go('menu.perfil')
				}	
            })
	};
})


.controller('perfilCtrl', function($scope, $ionicSideMenuDelegate) {

})
   
.controller('treinosCtrl', function($scope) {

})
      
.controller('cadastroCtrl', function($scope) {

})
   
.controller('amigosTrainersCtrl', function($scope) {

})
   
.controller('calendarioCtrl', function($scope) {

})
   
.controller('meusTreinosCtrl', function($scope) {

})
   
.controller('agendarTreinoCtrl', function($scope) {

})
   
.controller('criarTreinoCtrl', function($scope) {

})
   
.controller('exerciciosCtrl', function($scope) {

})
 