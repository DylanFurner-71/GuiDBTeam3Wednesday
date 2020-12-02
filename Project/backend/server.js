require(`dotenv`).config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const jwt = require('jsonwebtoken');

// express configs
const config = {
  name: 'newber',
  port: 8000,
  host: '0.0.0.0',
};

let whitelist = ['http://ec2-3-14-79-223.us-east-2.compute.amazonaws.com:3000', 'http://localhost:8000', 'http//localhost:3000']

// logger
const logger = log({ console: true, file: false, label: config.name });
app.use(bodyParser.json());
app.use(cors({
  origin: 'anonymous'
}));
// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true);
//     if (whitelist.indexOf(origin) === -1){
//       var message = 'no access'
//       return callback(new Error(message), false);
//     }
//     return callback(null, true);
//   }
// }));
// cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});



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

//VALIDATE TOKEN FUNCTION
function validateToken(req, res, next) {
  let authHeader = req.headers['authorization'];
  let token = authHeader && authHeader.split(' ')[1];

  if (token != null) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res.sendStatus(403);
      else {
        req.user = user;
        next();
      }
    })
  }
  else {
    return res.sendStatus(401);
  }
}




//*SPRINT 1 REQUESTS*

//*Epic 3*
//POST: Register Account
app.post('/register/:account_type', function (req, res) {
  let first = req.body.firstName;
  let last = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  let type = req.params.account_type;
  let org_id = req.body.org;
  let admin_code = req.body.adminCode
  
  connection.query('SELECT * FROM Accounts JOIN Contact ON Accounts.account_id = Contact.account_id WHERE email = ? AND password = ?', [email, password],
      function(err, result) {
        if (!result) {
          switch(type) {
            case "0": 
              connection.query('INSERT INTO Accounts (first_name, last_name, password, account_type, email, org_id) VALUES (?, ?, ?, ?, ?, ?)', [first, last, password, "customer",  email, org_id],
              function (err, result) {
                if (err)
                  throw err;
                else 
                  console.log("Successfully created user");
              });
              break;
            case "1":
              connection.query('INSERT INTO Accounts (first_name, last_name, password, account_type, email, org_id) VALUES (?, ?, ?, ?, ?, ?)', [first, last, password, "driver", email, org_id],
              function (err, result) {
                if (err)
                  throw err;
                else 
                  console.log("Successfully createed driver");
              });
              break;
            case "2":
              connection.query('INSERT INTO Accounts (first_name, last_name, password, account_type, email, org_id) VALUES (?, ?, ?, ?, ?, ?)', [first, last, password, "employee", email, org_id],
              function (err, result) {
                if (err)
                  throw err;
                else 
                console.log("Successfully created employee");
              });
              break;
            case "3":
              connection.query('INSERT INTO Accounts (first_name, last_name, password, account_type, email, admin_code) VALUES (?, ?, ?, ?, ?, ?)', [first, last, password, "web-manager", email, admin_code],
              function (err, result) {
                if (err)
                  throw err;
                else 
                console.log("Successfully created Web manager");
              });
              break;
          }
        }
        else {
          res.status(400).send('user with those credentials already exists');
        }
      });

  res.send({ 'request': 'valid', 'account_type': req.params.account_type })
});

//POST: Login Account
app.post('/login', function (req, res) {
  //Authenticate user
  let email = req.body.email;
  let password = req.body.password;
  if (email && password) {
    connection.query('SELECT * FROM Accounts WHERE email = ? AND password = ?', [email, password], 
    function(err, result, fields) {
      if(result) {
        let user = result;
        let accessToken = jwt.sign("user", process.env.ACCESS_TOKEN_SECRET);
        let response = {
          accessToken: accessToken,
          user: user,
        }
        res.send((response));
      }
      else  {
        res.status(400).send('incorrect username/password')
      }
      res.end();
    });
  }
  else {
    res.send('please enter username and password');
    res.end();
  }
});

//POST: Add Restaurant
app.post('/api/v1/restaurants', function (req, res) {
  var Name = req.body.restaurant_name;
  var AddressBody = req.body.address_body;
  var City = req.body.city;
  var State = req.body.state;
  var Zip = req.body.zip;
  var Phone = req.body.phone;
  connection.query("INSERT INTO Addresses (address_body, city, state, zip, country, address_type) VALUES (?, ?, ?, ?, ?, ?)",
  [AddressBody, City, State, Zip, "US", "restaurant"], function (err, result1, fields) {
    if (err) throw err;
    connection.query("INSERT INTO Restaurants (restaurant_name, address_id) VALUES (?, ?)", [Name, result1.insertId], function (err, result2, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result2));
      connection.query("INSERT INTO Contact (phone, restaurant_id) VALUES (?, ?)", [Phone, result2.insertId], function (err, result3, fields) {
        if (err) throw err;
      });
    });
  });
    
});

//DELETE: Remove Restaurant
app.delete('/api/v1/restaurants/:restaurantId', function (req, res) {
  var RestaurantID = req.params.restaurantId
  connection.query("DELETE FROM Restaurants WHERE restaurant_id = ?", [RestaurantID],function (err, result, fields) {
        if (err)
          return console.error(error.message);
        res.end(JSON.stringify(result));
      });
});

//DELETE: Remove Account
app.delete('/api/v1/accounts/:accountId', function (req, res) {
  var AccountID = req.params.accountId
  connection.query("DELETE FROM Accounts WHERE account_id = ?", [AccountID],function (err, result, fields) {
        if (err)
          return console.error(error.message);
        res.end(JSON.stringify(result));
      });
});

//DELETE: Remove Review
app.delete('/api/v1/review/:reviewId', function (req, res) {
  var OrderReviewID = req.params.reviewId
  connection.query("DELETE FROM Reviews WHERE review_id = ?", [OrderReviewID],function (err, result, fields) {
        if (err)
            return console.error(error.message);
        res.end(JSON.stringify(result));
      });
});

// //GET: See Average Restaurant Rating
// app.get('/api/v1/stats', function (req, res) {
//   connection.query("SELECT avg(rating) FROM restaurant", function (err, result, fields) {
//         if (err) throw err;
//         res.end(JSON.stringify(result)); // Result in JSON format
//     });
// });

//GET: Get all restaurants
app.get('/api/v1/restaurants', function (req, res) {
  connection.query("SELECT * FROM Restaurants", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get restaurant
app.get('/api/v1/restaurants/:restaurantId', function (req, res) {
  var RestaurantID = req.params.restaurantId;
  connection.query("SELECT * FROM Restaurants WHERE restaurant_id = ?", [RestaurantID], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get restaurant address
app.get('/api/v1/restaurant/:rest/address', function (req, res) {
  var RestaurantID = req.params.rest;
  connection.query("SELECT address_body, city, state, zip FROM Restaurants INNER JOIN Addresses on Restaurants.address_id = Addresses.address_id WHERE Restaurants.restaurant_id = ?", [RestaurantID], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get restaurant contact
app.get('/api/v1/restaurant/:rest/contact', function (req, res) {
  var RestaurantID = req.params.rest;
  connection.query("SELECT * FROM Contact WHERE restaurant_id = ?", [RestaurantID], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get order's address
app.get('/api/v1/order/:id/address', function (req, res) {
  var AddressID = req.params.id;
  connection.query("SELECT address_body, city, state, zip FROM Addresses WHERE address_id = ?", [AddressID], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get account's contact
app.get('/api/v1/account/:id/contact', function (req, res) {
  var AccountID = req.params.id;
  connection.query("SELECT * FROM Contact WHERE account_id = ?", [AccountID], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get account's order history
app.get('/api/v1/account/:id/history', function (req, res) {
  var AccountID = req.params.id;
  connection.query("SELECT * FROM Orders WHERE account_id = ? and status = ?", [AccountID, "Delivered"], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//PUT: Update account's info
app.put('/api/v1/account/:id', function (req, res) {
  var AccountID = req.params.id;
  var FirstName = req.body.first_name;
  var LastName = req.body.last_name;
  var Email = req.body.email;

  connection.query("UPDATE Accounts SET first_name = ?, last_name = ?, email = ? WHERE account_id = ?", [FirstName, LastName, Email, AccountID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get restaurant's order history
app.get('/api/v1/restaurant/:id/history', function (req, res) {
  var RestaurantID = req.params.id;
  connection.query("SELECT * FROM Orders WHERE restaurant_id = ? and status = ?", [RestaurantID, "Delivered"], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get all accounts
app.get('/api/v1/accounts', function (req, res) {
  connection.query("SELECT * FROM Accounts", function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get account
app.get('/api/v1/accounts/:id', function (req, res) {
  var AccountID = req.params.id;
  connection.query("SELECT * FROM Accounts WHERE account_id = ?", [AccountID], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//POST: Add/create order
app.post('/api/v1/orders', function (req, res) {
  var RestaurantID = req.body.restaurant_id;
  var AccountID = req.body.account_id;
  var AddressID = req.body.address_id;
  var Status = req.body.status;
  var TotalPrice = req.body.total_price;
  var FirstName = req.body.first_name;
  var LastName = req.body.last_name;
  var Phone = req.body.phone;
  var Items = req.body.items || [];
  connection.query("INSERT INTO Orders (restaurant_id, account_id, address_id, status, total_price, first_name, last_name, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [RestaurantID, AccountID, AddressID, Status, TotalPrice, FirstName, LastName, Phone], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));
      for (var i = 0; i < Items.length; i++) {
        connection.query("INSERT INTO OrderItems (order_id, name, price, quantity) VALUES (?, ?, ?, ?)",
          [result.insertId, Items[i].menuItem.item_details, Items[i].menuItem.item_price, Items[i].quantity], function (err, result, fields) {
          if (err) throw err;
        });
      }
    });
});

//POST: Add/create address
app.post('/api/v1/address', function (req, res) {
  var AddressBody = req.body.address_body;
  var City = req.body.city;
  var State = req.body.state;
  var Zip = req.body.zip;
  connection.query("INSERT INTO Addresses (address_body, city, state, zip, country, address_type) VALUES (?, ?, ?, ?, ?, ?)",
  [AddressBody, City, State, Zip, "US", "order"], function (err, result, fields) {
  if (err) throw err;
  res.end(JSON.stringify(result));
  });
});

//GET: Get orders by status
app.get('/api/v1/orders/:status', function (req, res) {
  var Status = req.params.status;
  connection.query("SELECT * FROM Orders WHERE status = ?", [Status], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
app.get('/api/v1/orders/:restaurantId/queue', function (req, res) {
  var Status = req.params.restaurantId;
  connection.query("SELECT * FROM Orders WHERE restaurant_id = ?", [Status], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
//GET: Get orders by id
app.get('/api/v1/order/:id', function (req, res) {
  var OrderID = req.params.id;
  connection.query("SELECT * FROM Orders WHERE order_id = ?", [OrderID], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//GET: Get orders items by order id
app.get('/api/v1/order/:id/items', function (req, res) {
  var OrderID = req.params.id;
  connection.query("SELECT * FROM OrderItems WHERE order_id = ?", [OrderID], function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});

//PUT: Update/change order status
app.put('/api/v1/orders/:id/:status', async (req, res) => {
    var OrderID = req.params.id
    var Status = req.params.status

     connection.query("UPDATE Orders SET status = ? WHERE order_id = ?", [Status, OrderID],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
     });
});

// //GET: Get most popular item
// app.get('/api/v1/stats/popular', function (req, res) {
//   //TODO
//   connection.query("SELECT", function (err, result, fields) {
//         if (err) throw err;
//         res.end(JSON.stringify(result)); // Result in JSON format
//     });
// });

// //GET: Get least popular item
// app.get('/api/v1/stats/unpopular', function (req, res) {
//   //TODO
//   connection.query("SELECT", function (err, result, fields) {
//         if (err) throw err;
//         res.end(JSON.stringify(result)); // Result in JSON format
//     });
// });

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

//get restaurant menu
app.get('/api/v1/restaurants/:id/menu', function(req, res) {
  let RestaurantID = req.params.id
  connection.query("SELECT item_id, item_details, item_price FROM Items inner join Menus on Items.menu_id = Menus.menu_id where Menus.restaurant_id = ?", [RestaurantID], function (err, result, fields) {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

// add menu item
app.post('/api/v1/menu/item/', function(req, res) {
  console.log("request.body ----------------------------?????>>>>>>.", req.body);
  var ItemDetails = req.body.item_details;
  var ItemPrice = req.body.item_price;
  var MenuID = req.body.menu_id;
  connection.query("INSERT INTO Items (item_details, item_price, menu_id) VALUES (?, ?, ?)", [ItemDetails, ItemPrice, MenuID], function (err, result, fields) {
    if (err) logger.error(err.stack);
    console.log("RESULT ::::::: >>> ", result)
    res.end(JSON.stringify(result));
  });
});

// update menu item
app.put('/api/v1/menu/item/:id', function(req, res) {
  var ItemID = req.params.id
  var ItemDetails = req.body.item_details;
  var ItemPrice = req.body.item_price;
  connection.query("UPDATE Items SET item_details = ?, item_price = ? WHERE item_id = ?", [ItemDetails, ItemPrice, ItemID], function (err, result, fields) {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

// delete menu item
app.delete('/api/v1/menu/item/:id', function(req, res) {
  var ItemID = req.params.id;

  connection.query("DELETE FROM Items WHERE item_id = ?", [ItemID], function (err, result, fields) {
    if (err) logger.error(err.stack);
    res.end(JSON.stringify(result));
  });
});

// //create restaurant menu
// app.post('/api/v1/restaurants/menu', (req, res) => {
//   var RestaurantID = req.body.restaurantId;
   
//   connection.query('INSERT INTO Menus (restaurant_id) VALUES (?)', [RestaurantID], (err, result, fields) => {
//     if (err) logger.error(err.stack);
//     res.end(JSON.stringify(result));
//   });
// });

// //delete restaurant menu
// app.delete('/api/v1/restaurants/:id/menu', (req, res) => {
//   var RestaurantID = req.params.id;

//   connection.query("DELETE FROM Menus WHERE restaurant_id = ?", [RestaurantID], (err, result, fields) => {
//     if (err) logger.error(err.stack);
//     res.end(JSON.stringify(result));
//   });
// });

// //update password
// app.put('/api/v1/accounts/:id/password', async(req,res) => {
//   var Newpassword = req.body.password
//   var Newid = req.params.id
//   connection.query("UPDATE Accounts SET password = ? WHERE account_id = ?", [Newpassword, Newid], function (err, result, fields){
//     if (err) logger.error(err.stack);
//     res.end(JSON.stringify(result));
//   });
// });

// //update payment method
// app.put('/api/v1/accounts/:id/payment', async(req,res) => {
//   var FisrtName = req.body.first_name
//   var LastName = req.body.last_name
//   var Billing = req.body.billing_address
//   var CardNumber = req.body.card_number
//   var CVC = req.body.cvc
//   var ID = req.params.id
  
//   connection.query("UPDATE Payment SET first_name = ?, last_name = ?,billing_address = ?, card_number = ?, cvc = ? WHERE account_id = ?", [FisrtName,LastName,Billing,CardNumber,CVC, ID], function (err, result, fields){
//     if (err) logger.error(err.stack);
//     res.end(JSON.stringify(result));
//   });
// });

// //create payment method
// app.post('/api/v1/accounts/:id/payment', (req, res) => {
//   var AccountID = req.params.id
//   var FisrtName = req.body.first_name
//   var LastName = req.body.last_name
//   var Billing = req.body.billing_address
//   var CardNumber = req.body.card_number
//   var CVC = req.body.cvc
  
//   connection.query('INSERT INTO Payment (account_id,first_name,last_name,billing_address,card_number,cvc) VALUES (?,?,?,?,?,?)', [AccountID,FisrtName,LastName,Billing,CardNumber,CVC], (err, result, fields) => {
//     if (err) logger.error(err.stack);
//     res.end(JSON.stringify(result));
//   });
// });

// //delete payment method  ---???
// app.delete('/api/v1/accounts/:id/payment', (req, res) => {
//   var AccountId = req.body.account_id;

//   connection.query("DELETE FROM Payment WHERE account_id = ?", [AccountId], (err, result, fields) => {
//     if (err) logger.error(err.stack);
//     res.end(JSON.stringify(result));
//   });
// });

// //update contact information
// app.put('/api/v1/accounts/:id/contact', async(req,res) => {
//   var phone = req.body.phone
//   var email = req.body.email
//   var ID = req.params.id
  
//   connection.query("UPDATE Contact SET phone = ?, email = ? WHERE account_id = ?", [phone,email,ID], function (err, result, fields){
//     if (err) logger.error(err.stack);
//     res.end(JSON.stringify(result));
//   });
// });

//create/add review
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
