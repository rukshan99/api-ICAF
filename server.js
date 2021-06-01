var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


require('dotenv').config({path: __dirname + '/.env'})

/* import *
  *  routes *
    *    here */

const MONGO_DB_PASSWORD = process.env['MONGO_DB_PASSWORD'];
const connectionString = `mongodb+srv://Admin:${MONGO_DB_PASSWORD}@icaf-cluster.pahle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app = express(),
port = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/* add *
  *  routes *
    *    here */

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