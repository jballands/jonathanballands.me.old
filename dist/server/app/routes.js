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

  router.get('', function (req, res) {
    res.render('home', {
      layout: 'default',
      title: 'jonathanballands.me'
    });
  });

  // -----------------------------------------------------------------------------

  router.get('/resume', function (req, res) {
    res.render('resume', {
      layout: 'default',
      title: 'Résumé | jonathanballands.me'
    });
  });

  // -----------------------------------------------------------------------------

  router.use('/work', (0, _workRoutes2.default)());

  // -----------------------------------------------------------------------------

  return router;
};

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _workRoutes = require('./workRoutes.js');

var _workRoutes2 = _interopRequireDefault(_workRoutes);

var _foundation = require('../foundation.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }