angular.module("TareasApp")
.factory("Usuario", function NotaFactory($resource) {
  return $resource("/usuarios/:id", {id: '@id'}, {
    update: {
      params: {id: '@id', nickname: '@nickname'},
      method: "PUT"
    }
  });
});