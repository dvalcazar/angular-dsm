
angular.module('TareasApp')
.controller('UsuarioShowController', function($routeParams, Usuario) {
  var controller = this;
  controller.usuario = Usuario.get({id: $routeParams.id});
  alert($routeParams);
});

  /**/

  /*$http({method: 'GET', url: '/notas/'+$routeParams.id})
	.success(function(data) {
    //console.log(data);
    controller.nota = data;
  })*/

/*Nota.encontrar($routeParams.id)
  .success(function(data) {
    controller.nota = data;
  });*/