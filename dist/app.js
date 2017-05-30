'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// parse incoming requests
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// point static dir to build root
app.use(_express2.default.static(_path2.default.join(__dirname + '/wwwroot')));

// setup view engine with ejs
app.set('views', __dirname + '/wwwroot');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Use morgan as logger
app.use((0, _morgan2.default)('dev'));

// routes files
app.use('/', _routes2.default);

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
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});

module.exports = app;
//# sourceMappingURL=app.js.map