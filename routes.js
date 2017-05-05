"use strict";

// env variables
// add api key to .env
require('dotenv').config();

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
    res.render('index.html');
});

router.get('/randombeer', function(req, res, next) {
    request.get("http://api.brewerydb.com/v2/beer/random/?key=" + process.env.API_KEY, function(err, request, response) {
        res.send(response);
    });
});

router.get('/search/:type/:query', function(req, res, next) {
    let url = "http://api.brewerydb.com/v2/search?q=" + req.params.query+ "&type=" + req.params.type + "&key=" + process.env.API_KEY;
    request.get(url, function(err, request, response) {
        res.json(response);
    });
});


module.exports = router;