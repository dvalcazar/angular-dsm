angular.module("TareasApp")
.controller("UsuarioBorrarController",function($scope,Usuario,$routeParams){
	var controller = this;
	controller.usuario = Usuario.get({id: $routeParams.id});
	$scope.borrarUsuario = function(usuario){
		controller.usuario.$delete();
		document.location.href = "/#/usuarios";
		//alert(JSON.stringify(controller.tarea, null, 4));
	};
});