angular.module("TareasApp")
.controller("TareaEditarController",function($scope, $routeParams, Tarea){
	$scope.tarea = Tarea.get({id: $routeParams.id})
	$scope.actualizarTarea = function(tarea){
		//alert(JSON.stringify($scope.tarea, null, 4));
		$scope.errors = null;
		$scope.updating = true;
		tarea.$update().catch(function(tarea){
			$scope.erros = [tarea.data.error];
		}).finally(function(){
			$scope.actualizando = false;
		});
		document.location.href = "/";
	};
});