/* 
 *  GENERATED FILE; DO NOT MODIFY!!! 
 *  (Modify /server instead)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var router = _express2.default.Router();

  // -----------------------------------------------------------------------------

  router.get('/ibm-swift', function (req, res) {
    res.render('ibm-swift', {
      layout: 'default',
      title: 'IBM Swift | jonathanballands.me'
    });
  });

  router.get('/somersault', function (req, res) {
    res.render('somersault', {
      layout: 'default',
      title: 'Somersault | jonathanballands.me'
    });
  });

  // -----------------------------------------------------------------------------

  return router;
};

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _foundation = require('../foundation.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }