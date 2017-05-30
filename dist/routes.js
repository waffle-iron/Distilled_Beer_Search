'use strict';

// env variables
// add api key to .env

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var router = _express2.default.Router();


router.get('/', function (req, res, next) {
    res.render('index.html');
});

router.get('/randombeer', function (req, res, next) {
    var url = 'http://api.brewerydb.com/v2/beer/random/?key=' + process.env.API_KEY;
    _request2.default.get(url, function (err, request, response) {
        console.log(response);
        res.json(response);
    });
});

module.exports = router;
//# sourceMappingURL=routes.js.map