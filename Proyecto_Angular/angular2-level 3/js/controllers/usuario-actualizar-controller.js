angular.module("TareasApp")
.controller("UsuarioEditarController",function($scope, $routeParams, Usuario){
	$scope.usuario = Usuario.get({id: $routeParams.id})
	$scope.actualizarUsuario = function(usuario){
		//alert(JSON.stringify($scope.tarea, null, 4));
		$scope.errors = null;
		$scope.updating = true;
		usuario.$update().catch(function(usuario){
			$scope.erros = [usuario.data.error];
		}).finally(function(){
			$scope.actualizando = false;
		});
		document.location.href = "/#/usuarios";
	};
});