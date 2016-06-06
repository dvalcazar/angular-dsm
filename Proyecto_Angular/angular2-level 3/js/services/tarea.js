angular.module("TareasApp")
.factory("Tarea", function NotaFactory($resource) {
  return $resource("/tareas/:id", {id: '@id'/*, tittle: '@header', description: '@description', content: '@content'*/}, {
    update: {
      params: {id: '@id', title: '@title', description: '@description', content: '@content'},
      method: "PUT"
    }
  });
});