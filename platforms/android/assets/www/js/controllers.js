var handaController = angular.module('handaApp.controllers', ['handa.app.services' ])

    .controller('AppCtrl', function ($scope, $state ) {

        $scope.logout = function () {
            //OpenFB.logout();
            $state.go('app.login');
        };

        $scope.revokePermissions = function () {
            console.log('Revoke Permission');
        };

    })

    .controller('LoginCtrl2', function($scope, $location, $rootScope, handaService1, handaService2){


        var a = handaService1.isAuth();
        var b = handaService2.isAuth();
        var c = handaService2.status();

        $scope.loginData = {username:'', password:''};

        $scope.login = function () {

            //console.log('Doing login', $scope.loginData);
            var user = $scope.loginData.username;
            var pass = $scope.loginData.password;
            console.log($location);


            
            if(user && pass){
                console.log(user + pass);
                console.log($location);

                $location.path('/app/profile');
            }

           /*
            LoginApp.login('').then(
                
                function () {
                    $location.path('/app/profile');
                },
                function () {
                    alert('OpenFB login failed');
                });
            */

            };

    })

    .controller('FeedCtrl', function ($scope, $location, $rootScope) {
        $scope.user = {name:'Handa', email:'handa@handa'};

    })

    .controller('ShareCtrl', function ($scope, OpenFB) {

        $scope.item = {};

        $scope.share = function () {
            OpenFB.post('/me/friends', $scope.item)
                .success(function () {
                    $scope.status = "This item has been shared on OpenFB";
                })
                .error(function(data) {
                    alert(data.error.message);
                });
        };

    })

    .controller('ProfileCtrl', function ($scope) {
         $scope.user = {name:'Handa', email:'handa@handa'};
        
    })

    .controller('PersonCtrl', function ($scope, $stateParams, OpenFB) {
        OpenFB.get('/' + $stateParams.personId).success(function (user) {
            $scope.user = user;
        });
    })

    .controller('FriendsCtrl', function ($scope, $stateParams ) {
       
    })

    .controller('TreinosCtrl', function ($scope, $stateParams, $location, $rootScope, $state ) {

        $scope.view = {title:'Treinos'};

        $scope.criarTreinos = function () {


        $state.go('app.criarTreinos');
        
       };
    })

    .controller('CriarTreinosCtrl', function ($scope, $stateParams, $location, $rootScope ) {

        $scope.view = {title:'Criação de Treino'};


        $scope.criarTreinos = function () {
        $location.path('/app/criarTreinos');
       };
    })

    .controller('MutualFriendsCtrl', function ($scope, $stateParams, OpenFB) {
        OpenFB.get('/' + $stateParams.personId + '/mutualfriends', {limit: 50})
            .success(function (result) {
                $scope.friends = result.data;
            })
            .error(function(data) {
                alert(data.error.message);
            });
    })
;