'use strict';

import express from 'express';
import routes from './routes';

import bodyParser from 'body-parser';
import path from 'path';
import logger from 'morgan';

const app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// point static dir to build root
app.use(express.static(path.join(__dirname + '/wwwroot')));

// setup view engine with ejs
app.set('views', __dirname + '/wwwroot');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Use morgan as logger
app.use(logger('dev'));

// routes files
app.use('/', routes);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      return res.status(200).json({});
    }

    next();
  });

// error handler
app.get('*', function (req, res) {
    res.render('error.html');
  });

//listen to port 3000 when locally
app.listen(process.env.PORT || 3000, function () {
    console.log('Express server listening on port %d in %s mode',
      this.address().port, app.settings.env);
  });

module.exports = app;
