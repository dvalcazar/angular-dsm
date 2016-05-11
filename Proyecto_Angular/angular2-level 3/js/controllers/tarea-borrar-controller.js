angular.module("TareasApp")
.controller("TareaBorrarController",function($scope,Tarea){
	$scope.borrarNota = function(tarea){
		//Tarea.$delete(tarea);
		alert("funciona");
	};
});