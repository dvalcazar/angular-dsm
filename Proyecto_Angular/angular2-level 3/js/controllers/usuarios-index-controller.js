angular.module('TareasApp')
.controller('UsuariosIndexController', function(Usuario, $scope) {
  var controller = this;
  controller.usuarios = Usuario.query();
});