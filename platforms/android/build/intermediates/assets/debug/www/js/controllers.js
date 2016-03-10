angular.module('app.controllers', [])
  

.controller('menuCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};
})

.controller('loginCtrl', function($scope) {

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
 