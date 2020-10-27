const express = require('express');
const mysql = require('mysql');
const router = require('./routes');
const app = express();

const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const logger = log({ console: true, file: false, label: config.name });

//express configs
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

//body parser
app.use(express.urlencoded({ extended: false }))

app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//routing
app.use('/', apiRouter)


//setup server
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});

module.exports = app;
