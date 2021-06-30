var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path') 
require('dotenv').config({path: __dirname + '/.env'})

/* import *
  *  routes *
    *    here */
const UserRoutes = require('./routes/user-routes');
const ReviewerRoutes = require('./routes/reviewer-routes');

const MONGO_DB_PASSWORD = process.env['MONGO_DB_PASSWORD'];
const connectionString = `mongodb+srv://Admin:${MONGO_DB_PASSWORD}@icaf-cluster.pahle.mongodb.net/icafDB?retryWrites=true&w=majority`;

app = express(),
port = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

/* add *
  *  routes *
    *    here */
app.use('/', UserRoutes);
app.use('/api/v1/reviewer', ReviewerRoutes);


mongoose
.connect(connectionString)
.then(() => {
  app.listen(port, () => {
    console.log('Server is listening on port ' + port + `\n http://localhost:${port}`);
});
})
.catch(err => {
    console.log(err);
});