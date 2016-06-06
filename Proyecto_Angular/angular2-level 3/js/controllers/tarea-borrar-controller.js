angular.module("TareasApp")
.controller("TareaBorrarController",function($scope,Tarea,$routeParams){
	var controller = this;
	controller.tarea = Tarea.get({id: $routeParams.id});
	$scope.borrarTarea = function(tarea){
		controller.tarea.$delete();
		document.location.href = "/";
		//alert(JSON.stringify(controller.tarea, null, 4));
	};
});