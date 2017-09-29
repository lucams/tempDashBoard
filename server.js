var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Temperatura = require('./api/models/tempDashBoardModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tempdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/tempDashBoardRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Dashboard de Temperatura Setorial RESTful API server started on: ' + port);
