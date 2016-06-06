angular.module('TareasApp')
.controller('UsuarioNuevaController', function($scope, Usuario) {
  this.usuario = {};
  $scope.usuario = new Usuario();//////////////resource
  this.guardaNuevaUsuario = function() {
    console.log(this.usuario);
    var controller = this;
    controller.errors = null;
    $scope.usuario.$save(this.usuario)/////////////resource
    .catch(function(usuario) {
      controller.errors = usuario.data.error;
    })
    this.usuario = {};
    document.location.href = "/#/usuarios";
  };
});