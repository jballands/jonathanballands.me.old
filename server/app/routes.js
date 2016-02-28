/*
 *  /server/app/index.js
 *  © 2016 Jonathan Ballands
 */

import express from 'express';

// -----------------------------------------------------------------------------

import {log} from '../foundation.js';

// -----------------------------------------------------------------------------

export default function() {
  let router = express.Router();

// -----------------------------------------------------------------------------

  router.get('', (req, res) => {
    res.render('home', {
      layout: 'default'
    });
  });

// -----------------------------------------------------------------------------

  router.get('/resume', (req, res) => {
    res.render('resume', {
      layout: 'default'
    });
  });

// -----------------------------------------------------------------------------

  return router;
}
