// JavaScript source code
var handaApp = angular.module('handaApp', ['ionic', 'handaApp.controllers', 'ngCordova']);

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log('START');
    var db = window.sqlitePlugin.openDatabase({name: "my.db"});
    debugger;
    var aa = navigator.splashscreen.show();
};

var db = null;

handaApp.run(function($ionicPlatform, $cordovaSQLite) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
            db = $cordovaSQLite.openDB("my.db");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
        });
    });


handaApp.run(function ($rootScope, $state, $ionicPlatform, $window) {
    //OpenFB.init(477319329140326, 'http://localhost:8100/oauthcallback.html');
    $ionicPlatform.ready(function () {
        
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });


    $rootScope.$on('$stateChangeStart', function (event, toState) {
        //            debugger; 
        //$state.go('app.login');
        //event.preventDefault();
    });

    /*       
    $rootScope.$on('OAuthException', function() {
        $state.go('app.login');
    });
    */

});

handaApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: "AppCtrl"
        })

        .state('app.login', {
            url: "/login",
            views: {
                'menuContent': {
                    templateUrl: "templates/login.html",
                    controller: "LoginCtrl2"
                }
            }
        })

        .state('app.logout', {
            url: "/logout",
            views: {
                'menuContent': {
                    templateUrl: "templates/logout.html",
                    controller: "LogoutCtrl"
                }
            }
        })

        .state('app.profile', {
            url: "/profile",
            views: {
                'menuContent': {
                    templateUrl: "templates/profile.html",
                    controller: "ProfileCtrl"
                }
            }
        })



        .state('app.friends', {
            url: "/friendlists",
            views: {
                'menuContent': {
                    templateUrl: "templates/friend-list.html",
                    controller: "FriendsCtrl"
                }
            }
        })
        .state('app.treinos', {
            url: "/treinos",
            views: {
                'menuContent': {
                    templateUrl: "templates/treinos.html",
                    controller: "TreinosCtrl"
                }
            }
        })
        .state('app.criarTreinos', {
            url: "/treinos/criar",
            views: {
                'menuContent': {
                    templateUrl: "templates/criarTreinos.html",
                    controller: "CriarTreinosCtrl"
                }
            }
        })
        .state('app.person', {
            url: "/person/:personId",
            views: {
                'menuContent': {
                    templateUrl: "templates/person.html",
                    controller: "PersonCtrl"
                }
            }
        })
        .state('app.feed', {
            url: "/feed",
            views: {
                'menuContent': {
                    templateUrl: "templates/feed.html",
                    controller: "FeedCtrl"
                }
            }
        })

        ;

    // fallback route
    $urlRouterProvider.otherwise('/app/profile');
});