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

  .when('/usuarios/nueva', {
    templateUrl: 'templates/pages/usuarios/nuevo-usuario.html',
    controller: 'UsuarioNuevaController',
    controllerAs: 'usuarioNuevaCtrl'
  })

  .when('/tareas/:id', {
    templateUrl: 'templates/pages/tareas/nota-show.html',
    controller: 'TareaShowController',
    controllerAs: 'tareaShowCtrl'
  })

  .when('/usuarios/:id', {
    templateUrl: 'templates/pages/usuarios/usuario-show.html',
    controller: 'UsuarioShowController',
    controllerAs: 'usuarioShowCtrl'
  })

  .when('/borrar/:id', {
    templateUrl: 'templates/pages/borrar/borrar-tarea.html',
    controller: 'TareaBorrarController',
    controllerAs: 'tareaBorrarCtrl'
  })

  .when('/usuario-borrar/:id', {
    templateUrl: 'templates/pages/borrar-usuario/borrar-usuario.html',
    controller: 'UsuarioBorrarController',
    controllerAs: 'usuarioBorrarCtrl'
  })

  .when('/update/:id', {
    templateUrl: 'templates/pages/update/update-tarea.html',
    controller: 'TareaEditarController',
    controllerAs: 'tareaEditarCtrl'
  })

  .when('/usuario-update/:id', {
    templateUrl: 'templates/pages/update-usuario/update-usuario.html',
    controller: 'UsuarioEditarController',
    controllerAs: 'usuarioEditarCtrl'
  })

  .otherwise({redirectTo: '/'});

});
