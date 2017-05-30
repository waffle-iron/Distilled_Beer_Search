'use strict';

// env variables
// add api key to .env
require('dotenv').config();

import express from 'express';
const router = express.Router();
import request from 'request';

router.get('/', function (req, res, next) {
    res.render('index.html');
  });

router.get('/randombeer', function (req, res, next) {
    const url = 'http://api.brewerydb.com/v2/beer/random/?key=' + process.env.API_KEY;
    request.get(url, function (err, request, response) {
        console.log(response);
        res.json(response);
      });
  });

module.exports = router;
