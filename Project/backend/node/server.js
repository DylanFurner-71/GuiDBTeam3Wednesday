const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

//express configs
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

const logger = log({ console: true, file: false, label: config.name });
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//mysql connection
var connection = mysql.createConnection({
  host: 'backend-db',
  port: '3306',
  user: 'manager',
  password: 'Password',
  database: 'db'
});

//Attempting to connect to the database.
connection.connect(function (err) {
  if (err)
    logger.error("Cannot connect to DB!");
  logger.info("Connected to the DB!");
});

app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});

app.get('/', function (req, res) {
  res.send('home')
});




//*SPRINT 1 REQUESTS*

//*Epic 3*
//POST: Register Account
app.post('/register/:type', function (req, res) {
  //TODO - DB query
  console.log(`created ${req.params.type}`)
  res.send({ 'request': 'valid', 'type': req.params.type })
});

//POST: Login Account
app.post('/login', function (req, res) {
  //TODO - DB query
  console.log()
  res.send({ 'account_id': '00001' })
});

//PUT: Change Account Password
app.put('/changepassword', function (req, res) {
  //TODO - DB query
  console.log('password changed')
  res.send({ 'request': 'valid' });
});

//PUT: Change Account Address
app.put('/changeaddress', function (req, res) {
  //TODO - DB query
  console.log('address changed')
  res.send({ 'request': 'valid' });
});

//PUT: Change Account Contact
app.put('/changecontact', function (req, res) {
  //TODO - DB query
  console.log('contact changed')
  res.send({ 'request': 'valid' });
});




//SPRINT 2 REQUESTS

//*EPIC 5*
//GET: Get Restaurant Menu
app.get('/:id/menu', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//POST: Add Menu Item
app.put('/:id/menu/additem', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//DELETE: Delete Menu Item
app.delete('/:id/menu/rmitem', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//PUT: Update Menu Item
app.put('/:id/menu/updateitem', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//GET: Search Menu
app.get('/:id/menu/search', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//*EPIC 9*
//POST: Add Restaurant
app.post('/addrestaurant', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//DELETE: Remove Restaurant
app.post('/rmrestaurant', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//DELETE: Remove Account
app.delete('/rmaccount', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//DELETE: Remove Review
app.delete('/rmreview', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//GET: See Restaurant Rating
app.get('/:id/restaurant', function (req, res) {
  //TODO - DB query
  //TODO - RES
});




