/*
 *  /server/app/workRoutes.js
 *  © 2016 Jonathan Ballands
 */

import express from 'express';

// -----------------------------------------------------------------------------

import {log} from '../foundation.js';

// -----------------------------------------------------------------------------

export default function() {
  let router = express.Router();

// -----------------------------------------------------------------------------

  router.get('/ibm-swift', (req, res) => {
    res.render('ibm-swift', {
      layout: 'default',
      title: 'IBM Swift - jonathanballands.me'
    });
  });

  router.get('/somersault', (req, res) => {
    res.render('somersault', {
      layout: 'default',
      title: 'Somersault - jonathanballands.me'
    });
  });

// -----------------------------------------------------------------------------

  return router;
}
