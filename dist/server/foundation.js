/* 
 *  GENERATED FILE; DO NOT MODIFY!!! 
 *  (Modify /server instead)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = undefined;

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//  Set Up Logging -------------------------------------------------------------
//

/*
 *  /server/foundation.js
 *  © 2016 Jonathan Ballands
 */

_loglevel2.default.setLevel(_config2.default.beVerbose ? 0 : 2);

// -----------------------------------------------------------------------------

exports.log = _loglevel2.default;