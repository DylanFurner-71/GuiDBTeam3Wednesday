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
  res.status(200).send('home')
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
app.post('/api/v1/restaurants', function (req, res) {
  var name = req.body.restaurant_name
  connection.query(`INSERT INTO Restaurants (restaurant_name) VALUES ('${name}');`,
  [name], function (err, result, fields) {
  if (err) throw err;
  res.end(JSON.stringify(result));
  });
});

//DELETE: Remove Restaurant
app.post('/api/v1/restaurants/:restaurantId', function (req, res) {
  //TODO - DB query
  //TODO - RES
  var RestaurantID = req.body.RestaurantID
  
  connection.query("DELETE FROM restaurant WHERE RestaurantID = ? ", RestaurantID,function (err, result, fields) {
        if (err)
            return console.error(error.message);
        res.end(JSON.stringify(result));
      });
});

//DELETE: Remove Account
app.delete('/api/v1/accounts/:restaurantId', function (req, res) {
  //TODO - DB query
  //TODO - RES
  var CustomerID = req.body.CustomerID
  
  connection.query("DELETE FROM customer WHERE CustomerID = ? ", CustomerID,function (err, result, fields) {
        if (err)
            return console.error(error.message);
        res.end(JSON.stringify(result));
      });
});

//DELETE: Remove Review
app.delete('/api/v1/restaurants/:id/reviews', function (req, res) {
  //TODO - DB query
  //TODO - RES
  var OrderReviewID = req.body.OderReviewID
  
  connection.query("DELETE FROM OrderReview WHERE OrderReviewID = ? ", OrderReviewID,function (err, result, fields) {
        if (err)
            return console.error(error.message);
        res.end(JSON.stringify(result));
      });
  
  
});

//GET: See Restaurant Rating
app.get('/api/v1/stats', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT avg(rating) FROM restaurant", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get available restaurants
app.get('/api/v1/restaurants', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT * FROM Restaurants", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get restaurant menu
//app.get('/api/v1/restaurants/:rest/menu', function (req, res) {
  //TODO - DB query
  //TODO - RES
  //connection.query("SELECT * FROM DishDetails", function (err, result, fields) {
        //if (err) throw err;
        //res.end(JSON.stringify(result)); // Result in JSON format
    //});
//});

//GET: Get restaurant
app.get('/api/v1/restaurants/:rest', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT * FROM restaurant", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get item prices 
//app.get('/api/v1/restaurants/:rest/menu', function (req, res) {
  //TODO - DB query
  //TODO - RES
  //connection.query("SELECT DishPrice FROM DishDetails", function (err, result, fields) {
        //if (err) throw err;
        //res.end(JSON.stringify(result)); // Result in JSON format
    //});
//});

//GET: Get address
app.get('/api/v1/accounts/:id/address', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT RestaurantAddress FROM restaurant", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//POST: Create order
app.post('/api/v1/orders', function (req, res) {
  //TODO - DB query
  //TODO - RES
  var OderID = req.body.OderID
  var CustomerID = req.body.CustomerID
  var ToOderDetails = req.body.ToOderDetails
  var OrderStatus = req.body.OrderStatus
  
  connection.query("INSERT INTO restaurant (OderID, CustomerID, ToOderDetails, OrderStatus) VALUES (?, ?, ?, ?)",
  [OderID, CustomerID, ToOderDetails, OrderStatus], function (err, result, fields) {
  if (err) throw err;
  res.end(JSON.stringify(result));
  });
});

//Spring05
//GET: Get outstanding orders
app.get('/api/v1/orders/:restaurant/queue', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT * FROM order", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//PUT: Update order status to 'being prepared'
app.put('/api/v1/orders/:order/status', async (req, res) => {
    var OrderStatusNew = req.body.OrderStatusNew
    var OrderStatusOld = req.body.OrderStatusOld

     connection.query("UPDATE order SET OrderStatus = ? WHERE OrderStatus = ?", [OrderStatusNew,OrderStatusOld],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
     });
});

//PUT: Update order status to 'finding driver'
app.put('/api/v1/orders/:order/status', async (req, res) => {
    var OrderStatusNew = req.body.OrderStatusNew
    var OrderStatusOld = req.body.OrderStatusOld

     connection.query("UPDATE order SET OrderStatus = ? WHERE OrderStatus = ?", [OrderStatusNew,OrderStatusOld],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
     });
});

// POST: Request delivery driver
// app.post('/api/v1/orders', function (req, res) {
//   TODO - DB query
//   TODO - RES
//   var OderID = req.body.OderID
//   var CustomerID = req.body.CustomerID
//   var ToOderDetails = req.body.ToOderDetails
//   var OrderStatus = req.body.OrderStatus
//
//   connection.query("INSERT INTO restaurant (OderID, CustomerID, ToOderDetails, OrderStatus) VALUES (?, ?, ?, ?)",
//   [OderID, CustomerID, ToOderDetails, OrderStatus], function (err, result, fields) {
//   if (err) throw err;
//   res.end(JSON.stringify(result));
//   });
// });

//GET: Get order details
app.get('/api/v1/orders/:order/details', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT * FROM OrderDetails", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get restaurant order history
app.get('/api/v1/orders/history', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT * FROM order", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get restaurant stats (3 most popular items)
app.get('/api/v1/stats', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT DishName, PopularCount INT FROM order", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});


//GET: get restaurant stats (time of day, most orders)
app.get('/api/v1/stats', function (req, res) {
  //TODO - DB query
  //TODO - RES
  connection.query("SELECT DishName INT FROM order", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});


//JohnZ

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

/*
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
*/

//get restaurant menu
app.get('/api/v1/restaurants/:id/menu', function(req, res) {
  var RestaurantID = req.params.id
  connection.query("SELECT item_details FROM Items inner join Menus on Items.menu_id = Menus.menu_id where Menus.restaurant_id = ?", [RestaurantID], function (err, result, fields) {
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

//delete restaurant meun
app.delete('/api/v1/restaurants/:id/menu', (req, res) => {
  var RestaurantID = req.params.id;
  var MenuID = req.body.menu_id;
  connection.query("DELETE FROM Menus WHERE restaurant_id = ? and menu_id = ?", [RestaurantID,MenuID], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});



  

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
  
  connection.query('INSERT INTO Payment (account_id,first_name,last_name,billing_address,card_number,cvc) VALUES (?,?,?,?,?,?)', [AccountID,FisrtName,LastName,Billing,CardNumber,CVC], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});


//delete payment method  ---???
app.delete('/api/v1/accounts/:id/payment', (req, res) => {
  var AccountId = req.body.account_id;

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







//creat meun item
app.post('/api/v1/restaurants/:rest/menu/item', (req, res) => {
  var ItemId = req.body.item_id
  var MenuId = req.body.menu_id
  var ItemDetails = req.body.item_details
  var ItemPrice= req.body.item_price
  
  
  connection.query('INSERT INTO Items (item_id,item_details,item_price,menu_id) VALUES (?,?,?,?)', [ItemId,ItemDetails,ItemPrice,MenuId], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

//delete menu item by item_details ???
app.delete('api/v1/restaurants/:rest/menu/item', (req, res) => {
  var ItemDetails = req.body.item_details;
  connection.query("DELETE FROM Items WHERE item_details = ?", [ItemDetails], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});


//update menu item
app.put('/api/v1/restaurants/:rest/menu/item', async(req,res) => {
  var ItemId = req.body.item_id
  var ItemDetails = req.body.item_details
  var ItemPrice= req.body.item_price
  
  connection.query("UPDATE Items SET item_details = ?, item_price = ? WHERE item_id = ?", [ItemDetails,ItemPrice,ItemId], function (err, result, fields){
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

//creat review
app.post('/api/v1/restaurants/:rest/reviews', (req, res) => {
  var RestaurantId = req.params.rest
  var AccountId = req.body.account_id
  var Rating = req.body.rating
  var Content= req.body.content
  
  connection.query('INSERT INTO Reviews (restaurant_id,account_id,rating,content) VALUES (?,?,?,?)', [RestaurantId,AccountId,Rating,Content], (err, result, fields) => {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

//get all reviews
app.get('/api/v1/restaurants/:rest/reviews', function(req, res) {
  var RestaurantID = req.params.rest;
  connection.query("SELECT * FROM Reviews WHERE restaurant_id = ?", [RestaurantID], function (err, result, fields) {
    if (err) 
      logger.error(err.stack);
    else
      res.end(JSON.stringify(result));
  });
}); 

//order status
 
//order queue

