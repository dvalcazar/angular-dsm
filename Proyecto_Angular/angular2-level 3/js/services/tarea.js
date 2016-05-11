

/*angular.module("NotasApp")
.factory("Nota", function NotaFactory($http) {
  return {
    todas: function(){
      return $http({method: 'GET', url: '/notas'});
    },
    crearNota: function(nota){
      return $http({method: 'POST', url: '/notas', data: nota});
    },
    encontrar: function(id){
      return $http({method:"GET", url: "/notas/" + id});
    },
    actualizar: function(nota){
      return $http({method:"PUT", url: "/notas", data: nota});
    },
    borrar: function(id){
      return $http({method:"DELETE", url: "/notas/" + id});
    }
  }
});*/

angular.module("TareasApp")
.factory("Tarea", function NotaFactory($resource) {
  return $resource("/tareas/:id", {}, {
    update: {
    method: "PUT"
    }
  });
});

