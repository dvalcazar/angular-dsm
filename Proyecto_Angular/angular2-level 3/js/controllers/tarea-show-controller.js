
angular.module('TareasApp')
.controller('TareaShowController', function($routeParams, Tarea) {
  var controller = this;
  controller.tarea = Tarea.get({id: $routeParams.id});
  
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