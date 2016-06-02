angular.module("TareasApp")
.controller("TareaBorrarController",function($scope,Tarea,$routeParams){
	var controller = this;
	controller.tarea = Tarea.get({id: $routeParams.id});
	$scope.borrarTarea = function(tarea){
		//Tarea.$delete(tarea);
		$scope.alert("funciona");
	};
});