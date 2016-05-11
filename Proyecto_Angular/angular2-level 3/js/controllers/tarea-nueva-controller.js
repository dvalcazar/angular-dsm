

angular.module('TareasApp')
.controller('TareaNuevaController', function($scope, Tarea) {
  this.tarea = {};
  $scope.tarea = new Tarea();//////////////resource
  this.guardaNuevaTarea = function() {
    console.log(this.tarea);
    var controller = this;
    controller.errors = null;
    $scope.tarea.$save(this.tarea)/////////////resource
    .catch(function(tarea) {
      controller.errors = tarea.data.error;
    })
    this.tarea = {};
  };
});

