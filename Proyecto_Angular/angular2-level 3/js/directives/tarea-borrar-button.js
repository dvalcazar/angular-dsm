

angular.module('TareasApp')
  .directive('naElementoTarea', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/tarea-borrar-button.html',
      scope: {
        title: '=',
        description: '=',
        content: '=',
        image: '='
      },
      controller: function($scope){
        $scope.cabecera = 'Título común';
      },
      link: function(scope, element, attrs){
        element.on("click", function(){
          element.find("div.card p").toggleClass('hidden');
        });      
      }
    };
  });
