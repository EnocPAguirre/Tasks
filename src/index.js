const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/mevn-database')
  .then(db => console.log('la base está conectada'));
//Settings
app.set('port', process.env.PORT || 3000);


//Middleware
//funciones que ayudan a procesar antes de llegar a las urls
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/task', require('./routes/task'));

//Static files

app.use(express.static(__dirname + '/public'));


//Server is listening
app.listen(app.get('port'), () => {
  console.log('Server corriendo en el puerto ', app.get('port'));
});
