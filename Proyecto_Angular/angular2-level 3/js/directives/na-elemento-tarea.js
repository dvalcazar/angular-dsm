

angular.module('TareasApp')
  .directive('naElementoTarea', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/na-elemento-tarea.html',
      scope: {
        title: '=',
        description: '=',
        content: '=',
        image: '=',
        identif: '=',
        date: '='
      },
      controller: function($scope){
        $scope.cabecera = 'Título común';
      },
      link: function(scope, element, attrs){
        element.on("click", ".card", function(){
          element.find("div.card p").toggleClass('hidden');
        });
        element.on("click",".delete",function(){
          $(location).attr('href', '#/borrar/'+scope.identif);
        });
        element.on("click",".update",function(){
          $(location).attr('href', '#/update/'+scope.identif);
        });    
      }
    };
  });


//console.log(attrs.content);
      /*link: function(){
        $("div.card").on("click", function(){
          $("div.card p").removeClass('hidden');
        });
      }*/

      /*controller: function(){
        this.cabecera = 'Título común';
      },
      controllerAs: 'elementoNota'*/