

var express = require('express');
//var bodyParser     =        require("body-parser");
//var app            =        express();
//Here we are configuring express to use body-parser as middle-ware.

var app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use(express.static('angular2-level 3'));

app.get('/tareas', function(request, response){
	tareas = [{
    id: 24,
    category:
      {
        name: "Ipsum",
        icon: "ipsum"
      },
    description: 'Egestas nec, vestibulum et, malesuada adipiscing.',
    title: 'Sed augue ipsum',
    content: 'Fusce vulputate eleifend sapien. Aliquam eu nunc. Quisque malesuada placerat nisl.'
    },
    {
    id: 25,
    category:
      {
        name: "Fusce",
        icon: "fusce"
      },
    description: 'Nullam vel sem maecenas egestas arcu quis ligula.',
    title: 'Vulputate eleifend sapien',
    content: 'Donec vitae orci sed dolor rutrum auctor. Pellentesque auctor neque nec urna.'
    },
    {
    id: 26,
    category:
      {
        name: "Auctor",
        icon: "auctor"
      },
    description: 'Fusce egestas elit eget lorem. Sed a libero.',
    title: ' Nulla sit amet est',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
    },
    {
    id: 27,
    category:
      {
        name: "Morbi",
        icon: "morbi"
      },
    description: 'Suspendisse nisl elit, rhoncus eget, elementum ac.',
    title: 'Mattis ullamcorper velit',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
  }];
  response.json(tareas);
});

app.get('/tareas/:id', function(request, response){
  tarea = {
    id: 24,
    user: {
      name: 'Pedro',
      username: 'pedritoJS'
    },
    header: 'Maecenas egestas',
    description: 'Proin sapien ipsum porta',
    content: 'Phasellus accumsan cursus velit. Praesent venenatis metus at tortor pulvinar varius. Maecenas malesuada. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Quisque id odio. Etiam ultricies nisi vel augue. Maecenas nec odio et ante tincidunt tempus. Etiam iaculis nunc ac metus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.'
  };
  response.json(tarea);
});

app.post('/tareas', function(request, response){
  console.log(request.query);
});

app.listen(9000);


