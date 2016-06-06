

angular.module('TareasApp')
  .directive('naElementoUsuario', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/na-elemento-usuario.html',
      scope: {
        nickname: '=',
        id: '='
      },
      controller: function($scope){
        $scope.cabecera = '';
      },
      link: function(scope, element, attrs){
        element.on("click", ".card", function(){
          element.find("div.card p").toggleClass('hidden');
        });
        element.on("click",".delete",function(){
          $(location).attr('href', '#/usuario-borrar/'+scope.nickname);
        });
        element.on("click",".update",function(){
          $(location).attr('href', '#/usuario-update/'+scope.nickname);
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