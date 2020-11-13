require(`dotenv`).config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// express configs
const config = {
  name: 'newber',
  port: 8000,
  host: '0.0.0.0',
};

// logger
const logger = log({ console: true, file: false, label: config.name });
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//mysql connection
var connection = mysql.createConnection({
  host: process.env.MYSQL_CLOUD_HOST,
  user: process.env.MYSQL_CLOUD_USER,
  password: process.env.MYSQL_CLOUD_PASS,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB
});
 
//Attempting to connect to the database.
connection.connect(function (err) {
  if (err){
    logger.error("Cannot connect to DB!");
  }
  else{
  logger.info("Connected to the DB!");
  }
});
   


app.get('/', function (req, res) {
  res.status(200).send('home!!')
});




//*SPRINT 1 REQUESTS*

//*Epic 3*
//POST: Register Account
app.post('/register/:account_type', function (req, res) {
  //TODO - DB query
  console.log(`created ${req.params.account_type}`)
  res.send({ 'request': 'valid', 'account_type': req.params.account_type })
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
app.get('/:restaurant/menu', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//POST: Add Menu Item
app.put('/:restaurant/menu/additem', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//DELETE: Delete Menu Item
app.delete('/:restaurant/menu/rmitem', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//PUT: Update Menu Item
app.put('/:restaurant/menu/updateitem', function (req, res) {
  //TODO - DB query
  //TODO - RES
});

//GET: Search Menu
app.get('/:restaurant/menu/search', function (req, res) {
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
app.get('/:restaurant/rating', function (req, res) {
  //TODO - DB query
  //TODO - RES
});



//JZ
//update address
/*app.put('/api/v1/accounts/:id/address', async(req,res) => {
  var Newaddress = req.body.password
  var Newid = req.params.id
  connection.query("UPDATE Accounts SET  = ? WHERE  = ?", [Newaddress, Newid], function (err, result, fields){
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
*/


//get restaurant
app.get('/api/v1/restaurants',(req, res) =>{
  connection.query("SELECT restaurant_name FROM Newber.Restaurants", function (err, result, fields) { 
if(err){
  logger.error("Error while excuting Query: \n", err);
  res.status(400).json({
    "data": [],
    "error": "MySQL error"
  })
}
else{
  res.status(200).json({
    "data": result
  })
}
  });
});

//get restaurant menu
app.get('/api/v1/restaurants/:id/menu', function(req, res) {
  var RestaurantID = req.params.id
  connection.query("SELECT menu_id FROM Menus WHERE restaurant_id = ?", [RestaurantID], function (err, result, fields) {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

  
/*
//update password
app.put('/api/v1/accounts/:id/password', async(req,res) => {
  var Newpassword = req.body.password
  var Newid = req.params.id
  connection.query("UPDATE Accounts SET password = ? WHERE account_id = ?", [Newpassword, Newid], function (err, result, fields){
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});


//update payment method
app.put('/api/v1/accounts/:id/payment', async(req,res) => {
  var FisrtName = req.body.first_name
  var LastName = req.body.last_name
  var Billing = req.body.billing_address
  var CardNumber = req.body.card_number
  var CVC = req.body.cvc
  var ID = req.params.id
  
  connection.query("UPDATE Payment SET first_name = ?, last_name = ?,billing_address = ?, card_number = ?, cvc = ? WHERE account_id = ?", [FisrtName,LastName,Billing,CardNumber,CVC, ID], function (err, result, fields){
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

//create payment method
app.post('/api/v1/accounts/:id/payment', (req, res) => {
  var AccountID = req.params.id
  var FisrtName = req.body.first_name
  var LastName = req.body.last_name
  var Billing = req.body.billing_address
  var CardNumber = req.body.card_number
  var CVC = req.body.cvc
  
  connection.query('INSERT INTO users (account_id,first_name,last_name,billing_address,card_number,cvc) VALUES (?,?,?,?,?,?)', [AccountID,FisrtName,LastName,Billing,CardNumber,CVC], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

//delete payment method  ---???
app.delete('/api/v1/accounts/:id/payment', (req, res) => {
  var AccountId = req.params.id;

  connection.query("DELETE FROM Payment WHERE account_id = ?", [AccountId], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

//update contact information
app.put('/api/v1/accounts/:id/contact', async(req,res) => {
  var phone = req.body.phone
  var email = req.body.email
  var ID = req.params.id
  
  connection.query("UPDATE Contact SET phone = ?, email = ? WHERE account_id = ?", [phone,email,ID], function (err, result, fields){
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});



//creat restaurant menu
app.post('/api/v1/restaurants/:id/menu', (req, res) => {
  var RestaurantID = req.params.id
  var MenuName = req.body.menu_name
  
  connection.query('INSERT INTO Menus (restaurant_id,menu_name) VALUES (?,?)', [RestaurantID,MenuName], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

//delete meun
app.delete('/api/v1/restaurants/:id/menu', (req, res) => {
  var RestaurantID = req.params.id;

  connection.query("DELETE FROM Menus WHERE restaurant_id = ?", [RestaurantID], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

//creat meun item


//delete menu item


//update menu item

*/
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});

