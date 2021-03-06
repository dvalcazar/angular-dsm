var express = require('express');
/*var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});*/
var mongoose = require("mongoose");
//var bodyParser     =        require("body-parser");
//var app            =        express();
//Here we are configuring express to use body-parser as middle-ware.
var app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use(express.static('angular2-level 3'));

//-Parte de base de datos mongo para verificar si existe el usuario--//

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var Usuario = new Schema(
  {
    nickname: String,
    id: Number
  }
);

var Usuario = mongoose.model("Username", Usuario);

//--Parte de base de datos para introducir las tareas que se escriben en la web--//
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var NuevaTareaAngular = new Schema(
  {
    title: String,
    description: String,
    content: String,
    fecha: Date,
    id: Number
  }
);
var NuevaTareaAngular = mongoose.model("Tarea", NuevaTareaAngular);

mongoose.connect("mongodb://localhost/angular", function(error_basedatos) {

  if(!error_basedatos) {

    console.log("conexión a la base de datos establecida");

  }

  else {

    throw error_basedatos;

  }

});
var id_num=0;
var id_users = 0;

app.get('/tareas', function(request, response){
	
  
  NuevaTareaAngular.find(function(error_find,docs) {
    
    if (error_find) {
      
      //response.json(["fallo"]);
      console.log("fallo al buscar tareas");
      
    } else {
      //id_num=docs.length+1;
      
      for (var i=0;i<docs.length;i++){
        if(docs[i].id > id_num){
          id_num=docs[i].id;
        }
        if(i==docs.length-1){
          id_num=id_num;
        }
      }
         
      response.json(docs);
      
    }
  });
  
});

app.get('/tareas/:id', function(request, response){
  
  NuevaTareaAngular.find({id: request.params.id}, function(error_find_tarea,docs_tarea) {
    if(error_find_tarea){
      console.log("fallo al buscar la tarea por id");
    }
    else{
      response.json(docs_tarea[0]);
    }
  });
});

app.post('/tareas', function(request, response){
  console.log("Creando tarea");
  var insert_tarea = new NuevaTareaAngular({title: request.query.header, description: request.query.description, content: "",fecha: new Date, id: id_num});
  insert_tarea.save(function(error) {
    
    if (!error) {
      id_num=id_num+1;
      //response.json([true, false]);

    } else {
      //response.json([false, false]);

    }
  });
});

app.put('/tareas/:id', function(request, response){
  console.log("Modificando tarea");
  NuevaTareaAngular.findOne({id: request.params.id}, function(error_find_tarea,docs_tarea_editar) {
    if(error_find_tarea){
      console.log("fallo al buscar la tarea por id");
    }
    else{
      docs_tarea_editar.title=request.query.title;
      docs_tarea_editar.description=request.query.description;
      docs_tarea_editar.content="";
      docs_tarea_editar.save(function(err_mongo){
        if(!err_mongo){
          console.log("Tarea modificada");
        }
        else{
          console.log("Error al modificar la tarea");
        }
      });
    }
  });
});

app.delete('/tareas/:id', function(request_borrar,response_borrar){
  console.log("Borrando tarea");
  NuevaTareaAngular.findOne({id: request_borrar.params.id}, function(err,doc){
    if(!doc){
      console.log("Tarea no encontrada para borrar");
    }
    else{
      doc.remove(function(){
        console.log("Tarea eliminada");
      });
    }
  });
});

app.get('/usuarios', function(request, response){
  console.log("Devolviendo lista de usuarios");
  Usuario.find(function(error_find,docs) {
    
    if (error_find) {
      
      //response.json(["fallo"]);
      console.log("fallo al buscar usuarios");
      
    } else {
      //id_users=docs.length+1;
      for (var i=0;i<docs.length;i++){
        if(docs[i].id > id_users){
          id_users=docs[i].id;
        }
        if(i==docs.length-1){
          id_users=id_users;
        }
      }
      response.json(docs);
      
    }
  });
  
});

app.get('/usuarios/:id', function(request, response){
  console.log("Devolviendo usuario");
  Usuario.find({nickname: request.params.id}, function(error_find_usuario,docs_usuario) {
    if(error_find_usuario){
      console.log("fallo al buscar el usuario por id");
    }
    else{
      response.json(docs_usuario[0]);
    }
  });
});

app.post('/usuarios',function(request_nuevo_usuario,response_nuevo_usuario){

  Usuario.find({nickname: request_nuevo_usuario.query.nickname}, function(error_find,docs) {
    
        if (error_find) {
          
          //response.json([false, false]);
          console.log("error en acceso a base de datos de usuarios");

        } else if (docs.length == 0) {

          // No existe usuario
          var insert_user = new Usuario({id: id_users, nickname: request_nuevo_usuario.query.nickname});
          insert_user.save(function(error) {
            
            if (!error) {
              id_users=id_users+1;
              console.log("Usuario creado");
              //response.json([true, false]);

            } else {
              console.log("Error al crear el usuario en la base de datos");
              //response.json([false, false]);

            }
          });
          
        } else {

          // Existe el usuario
          console.log("El usuario ya existe");
          //response.json([false, true]);
          
        }
  });
});

app.put('/usuarios/:id', function(request, response){
  console.log("Actualizando nickname de usuario " + request.params.id + " con el nuevo nombre: " + request.query.nickname);
  Usuario.findOne({id: request.params.id}, function(error_find_usuario,docs_usuario_editar) {
    if(error_find_usuario){
      console.log("fallo al buscar el usuario por id");
    }
    else{
      docs_usuario_editar.nickname=request.query.nickname;
      docs_usuario_editar.save(function(err_mongo){
        if(!err_mongo){
          console.log("Usuario modificado");
        }
        else{
          console.log("Error al modificar el usuario");
        }
      });
    }
  });
});

app.delete('/usuarios/:id', function(request_borrar_usuario,response_borrar_usuario){
  console.log("Borrando usuario " + request_borrar_usuario.params.id);
  Usuario.findOne({id: request_borrar_usuario.params.id}, function(err,doc){
    if(!doc){
      console.log("Usuario no encontrado para borrar");
    }
    else{
      doc.remove(function(){
        console.log("Usuario eliminado");
      });
    }
  });
});

app.listen(9000);