/* 
 *  GENERATED FILE; DO NOT MODIFY!!! 
 *  (Modify /server instead)
 */

'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./app/routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _foundation = require('./foundation.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIFTEEN_MINS = 900000;

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

/*
 *  /server/index.js
 *  © 2016 Jonathan Ballands
 */

var app = (0, _express2.default)();

//
//  Handlebars -----------------------------------------------------------------
//

app.engine('hbs', (0, _expressHandlebars2.default)({
  extname: '.hbs',
  layoutsDir: __dirname + '/../views/layouts',
  partialsDir: __dirname + '/../views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/../views');

//
//  Static Files ---------------------------------------------------------------
//

app.use((0, _compression2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

//
//  Routing --------------------------------------------------------------------
//

app.use('/', (0, _routes2.default)());

//
//  Start ----------------------------------------------------------------------
//

var server = app.listen(process.env.PORT || _config2.default.port, function () {
  _foundation.log.info('Server listening on port ' + _config2.default.port);
});

process.on('SIGINT', function () {
  _foundation.log.info('SIGINT!!!');
  process.exit(0);
});

process.on('SIGTERM', function () {
  _foundation.log.info('SIGTERM!!!');
  process.exit(0);
});

process.on('exit', function () {
  server.close();
  _foundation.log.info('The server is going down NOW. Bye bye');
});