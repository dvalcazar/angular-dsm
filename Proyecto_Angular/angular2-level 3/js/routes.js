
angular.module('TareasApp')
.config(function($routeProvider){

  $routeProvider

  .when('/', {
    redirectTo: '/tareas'
  })

  .when('/tareas', {
    templateUrl: '/templates/pages/tareas/index.html',
    controller: 'TareasIndexController',
    controllerAs: 'TareasIndex'
  })

  .when('/usuarios', {
    templateUrl: '/templates/pages/usuarios/index.html',
    controller: 'UsuariosIndexController',
    controllerAs: 'UsuariosIndex'
  })

  .when('/tareas/nueva', {
      templateUrl: 'templates/pages/tareas/nueva.html',
      controller: 'TareaNuevaController',
      controllerAs: 'tareaNuevaCtrl'
    })

  .when('/tareas/:id', {
    templateUrl: 'templates/pages/tareas/nota-show.html',
    controller: 'TareaShowController',
    controllerAs: 'tareaShowCtrl'
  })
  .when('/borrar', {
    templateUrl: 'templates/pages/tareas/tarea-borrar.html',
    controller: 'TareaBorrarController',
    controllerAs: 'tareaBorrarCtrl'
  })

  .otherwise({redirectTo: '/'});

});
