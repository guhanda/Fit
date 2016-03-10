angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.perfil', {
    url: '/perfil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu.treinos', {
    url: '/treinos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/treinos.html',
        controller: 'treinosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/sidemenu',
    templateUrl: 'templates/menu.html',
    abstract:true,
    controller: 'menuCtrl'
  })

  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('menu.amigosTrainers', {
    url: '/amigostrainers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/amigosTrainers.html',
        controller: 'amigosTrainersCtrl'
      }
    }
  })

  .state('menu.calendario', {
    url: '/calendario',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendario.html',
        controller: 'calendarioCtrl'
      }
    }
  })

  .state('menu.meusTreinos', {
    url: '/meustreinos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusTreinos.html',
        controller: 'meusTreinosCtrl'
      }
    }
  })

  .state('menu.agendarTreino', {
    url: '/agendartreino',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agendarTreino.html',
        controller: 'agendarTreinoCtrl'
      }
    }
  })

  .state('menu.criarTreino', {
    url: '/criartreino',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criarTreino.html',
        controller: 'criarTreinoCtrl'
      }
    }
  })

  .state('exercicios', {
    url: '/exercicios',
    templateUrl: 'templates/exercicios.html',
    controller: 'exerciciosCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});